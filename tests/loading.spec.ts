import fs from 'node:fs';
import { test, expect, type Page } from '@playwright/test';

async function expectContent(page: Page) {
  await expect(page.locator('h1')).toContainText('DUANE HENRY');
  for (const id of ['biography', 'works', 'coaching', 'inquiries']) {
    const section = page.locator(`#${id}`);
    await expect(section.locator('section')).toBeVisible();
    await expect(section.locator('h2, h3').first()).toBeVisible();
    // Visibility assertions alone don't detect an opacity:0 ancestor.
    expect(await section.evaluate(el => [...el.querySelectorAll('h2, h3')].every(heading => {
      for (let node: Element | null = heading; node; node = node.parentElement) {
        const style = getComputedStyle(node);
        if (style.opacity === '0' || style.visibility === 'hidden') return false;
      }
      return true;
    }))).toBe(true);
  }
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('the hero, biography, and stable lazy-loading placeholders render without JavaScript', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('DUANE HENRY');
    await expect(page.locator('#biography section')).toBeVisible();

    for (const id of ['works', 'coaching', 'inquiries']) {
      const section = page.locator(`#${id}`);
      await expect(section).toBeVisible();
      await expect(section.locator('section')).toHaveCount(0);
    }

    await page.locator('#craft').getByRole('link', { name: 'Explore Coaching' }).click();
    await expect(page).toHaveURL(/#coaching$/);
    await expect(page.locator('#coaching')).toBeInViewport();
    await expect(page.locator('button[type=submit]')).toHaveCount(0);
  });
});

test('the hero and biography paint while JavaScript is stalled and hydrate without replacement', async ({ page }) => {
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.route(/\.js(?:\?|$)/, async route => { await gate; await route.continue(); });
  try {
    await page.goto('/', { waitUntil: 'commit' });
    await expect(page.locator('h1')).toContainText('DUANE HENRY');
    await expect(page.locator('#biography section')).toBeVisible();
    await page.waitForFunction(() => performance.getEntriesByName('first-contentful-paint').length > 0);
    console.log('First paint with scripts stalled:', await page.evaluate(() => performance.getEntriesByName('first-contentful-paint')[0].startTime));
    await page.evaluate(() => {
      (window as any).__originalHero = document.querySelector('h1');
      (window as any).__originalBiography = document.querySelector('#biography section');
    });
  } finally { release(); }
  await page.locator('#biography').scrollIntoViewIfNeeded();
  await expect(page.locator('#biography section')).toBeVisible();
  expect(await page.evaluate(() => (window as any).__originalHero === document.querySelector('h1'))).toBe(true);
  expect(await page.evaluate(() => (window as any).__originalBiography === document.querySelector('#biography section'))).toBe(true);
  expect(errors).toEqual([]);
});

test('biography reveal is positioned before it enters the viewport', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Scroll reveals only animate with a fine pointer.');
  await page.addInitScript(() => {
    (window as any).__bioAnimations = [];
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (frames, options) {
      if (this.closest('#biography')) {
        (window as any).__bioAnimations.push((this as HTMLElement).style.transform);
      }
      return animate.call(this, frames, options);
    };
  });
  await page.goto('/');
  const firstReveal = page.locator('#biography section > div > div').first();
  await expect.poll(() => firstReveal.evaluate(el => (el as HTMLElement).style.transform)).toBe('translateY(28px)');
  await firstReveal.evaluate(el => window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - window.innerHeight + 100));
  await expect.poll(() => page.evaluate(() => (window as any).__bioAnimations.length)).toBeGreaterThan(0);
  expect(await page.evaluate(() => (window as any).__bioAnimations[0])).toBe('translateY(28px)');
});

test('sections initialize without waiting for an idle callback and load one chunk at a time', async ({ page }) => {
  await page.addInitScript(() => {
    window.requestIdleCallback = () => 1;
    const observers = new Set<any>();

    class TestIntersectionObserver {
      root = null;
      rootMargin = '0px';
      thresholds = [0];
      target: Element | null = null;
      callback: any;

      constructor(callback: any, options?: IntersectionObserverInit) {
        this.callback = callback;
        this.rootMargin = options?.rootMargin ?? '0px';
        observers.add(this);
      }

      observe(target: Element) {
        this.target = target;
      }

      unobserve() {}
      disconnect() {}
      takeRecords() { return []; }
    }

    (window as any).IntersectionObserver = TestIntersectionObserver;
    (window as any).__intersect = (id: string) => {
      for (const observer of observers) {
        if (observer.target?.id !== id) continue;
        observer.callback(
          [{ isIntersecting: true, target: observer.target } as IntersectionObserverEntry],
          observer,
        );
      }
    };
  });

  const scripts: string[] = [];
  page.on('request', request => { if (request.resourceType() === 'script') scripts.push(request.url()); });
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('DUANE HENRY');
  await expect(page.locator('#biography section')).toBeVisible();
  expect(scripts.filter(url => /WorksSection|CoachingSection|InquiriesSection|Footer/.test(url))).toEqual([]);

  for (const id of ['works', 'coaching', 'inquiries']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await page.evaluate((sectionId) => (window as any).__intersect(sectionId), id);
    await expect(page.locator(`#${id} section`)).toBeVisible();
    await expect.poll(() => scripts.some(url => url.includes(`${id[0].toUpperCase()}${id.slice(1)}Section`))).toBe(true);
  }

  await page.locator('#footer').scrollIntoViewIfNeeded();
  await page.evaluate(() => (window as any).__intersect('footer'));
  await expect(page.locator('#footer footer')).toBeVisible();
  await expect.poll(() => scripts.some(url => url.includes('Footer'))).toBe(true);
  await expectContent(page);
});

test('booking selection and submission still work after deferred sections hydrate', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  // Never send a real inquiry from a regression test.
  await page.route('**/api/send-email', route => route.fulfill({ json: { success: true } }));
  // Stub the Turnstile widget so the test doesn't depend on Cloudflare.
  await page.route('**/challenges.cloudflare.com/**', route =>
    route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.addInitScript(() => {
    (window as any).turnstile = {
      render: (_container: HTMLElement, options: { callback?: (token: string) => void }) => {
        options.callback?.('test-turnstile-token');
        return 'test-widget';
      },
      reset: () => {},
      remove: () => {},
      getResponse: () => 'test-turnstile-token',
    };
  });
  await page.goto('/#coaching');
  await expect(page.locator('#coaching section')).toBeVisible();
  await page.getByRole('button', { name: /02 Audition/ }).click();
  await page.getByRole('button', { name: 'Book This Session', exact: true }).click();
  await expect(page.locator('button[type=submit]')).toBeEnabled();
  await expect(page.locator('#objective')).toHaveValue('Audition & Self-Tape Prep');
  await page.locator('#fullName').fill('Loading Regression Test');
  await page.locator('#email').fill('test@example.com');
  await page.locator('button[type=submit]').click();
  await expect(page.locator('#inquiries')).toContainText(/received|thank|sent/i);
  expect(errors).toEqual([]);
});

test('decorative glows do not use Safari-stalling blur filters', async ({ page }) => {
  await page.goto('/');
  for (const id of ['biography', 'works', 'coaching', 'inquiries']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await expect(page.locator(`#${id} section`)).toBeVisible();
  }

  await expect(page.locator('.ambient-glow')).toHaveCount(6);
  const expensiveBlurs = await page.evaluate(() => [...document.querySelectorAll('*')].flatMap(element => {
    const filter = getComputedStyle(element).filter;
    const radius = /blur\(([^)]+)px\)/.exec(filter);
    return radius && Number(radius[1]) >= 64 ? [{ tag: element.tagName, }] : [];
  }));
  expect(expensiveBlurs).toEqual([]);
  for (const glow of await page.locator('.ambient-glow').all()) {
    await expect(glow).toHaveCSS('filter', 'none');
    expect(await glow.evaluate(element => getComputedStyle(element).maskImage)).toContain('radial-gradient');
  }
});

test('the works marquee auto-scrolls on touch devices', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The marquee animation is specifically verified on mobile projects.');

  await page.goto('/');
  await page.locator('#works').scrollIntoViewIfNeeded();
  await expect(page.locator('#works section')).toBeVisible();

  const track = page.locator('#works .will-change-transform');
  const readTransform = () => track.evaluate((element) => (element as HTMLElement).style.transform);
  await expect.poll(readTransform).toMatch(/translate3d/);
  const before = await readTransform();
  await page.waitForTimeout(300);
  expect(await readTransform()).not.toBe(before);
});

test('scrolling past coaching renders inquiries under production CSP without blanking the page', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));

  const vercelConfig = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  const rawCsp = vercelConfig.headers
    ?.find((h: any) => h.source === '/(.*)')
    ?.headers?.find((h: any) => h.key === 'Content-Security-Policy')?.value;

  expect(rawCsp).toBeDefined();

  // Strip upgrade-insecure-requests only for local http test runner
  const cspHeader = rawCsp.replace(/;\s*upgrade-insecure-requests/, '');

  await page.route('**/*', async (route, req) => {
    const response = await route.fetch();
    if (req.resourceType() === 'document') {
      const headers = { ...response.headers(), 'content-security-policy': cspHeader };
      await route.fulfill({ response, headers });
    } else {
      await route.fulfill({ response });
    }
  });

  await page.route('**/challenges.cloudflare.com/**', route =>
    route.fulfill({ contentType: 'application/javascript', body: 'window.turnstile = { render: () => "w", reset: () => {}, remove: () => {} };' }));

  await page.goto('/');
  await page.locator('#coaching').scrollIntoViewIfNeeded();
  await expect(page.locator('#coaching section')).toBeVisible();

  // Scroll past Coaching / Practical Guidance into Inquiries
  await page.locator('#inquiries').scrollIntoViewIfNeeded();
  await expect(page.locator('#inquiries section')).toBeVisible();
  await expect(page.locator('main')).toBeVisible();
  expect(errors).toEqual([]);
});
