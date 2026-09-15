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
  test('the real page and anchor navigation work with JavaScript disabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:43861/');
  await expectContent(page);
  await page.locator('#craft').getByRole('link', { name: 'Explore Coaching' }).click();
  await expect(page).toHaveURL(/#coaching$/);
  await expect(page.locator('#coaching')).toBeInViewport();
  await expect(page.locator('button[type=submit]')).toBeDisabled();
  });
});

test('content paints while JavaScript is stalled, then hydrates without replacing it', async ({ page }) => {
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.route(/\.js(?:\?|$)/, async route => { await gate; await route.continue(); });
  try {
    await page.goto('/', { waitUntil: 'commit' });
    await expectContent(page);
    await page.waitForFunction(() => performance.getEntriesByName('first-contentful-paint').length > 0);
    console.log('First paint with scripts stalled:', await page.evaluate(() => performance.getEntriesByName('first-contentful-paint')[0].startTime));
    await page.evaluate(() => { (window as any).__originalHero = document.querySelector('h1'); });
    await expect(page.locator('button[type=submit]')).toBeDisabled();
  } finally { release(); }
  await expect(page.locator('button[type=submit]')).toBeEnabled();
  expect(await page.evaluate(() => (window as any).__originalHero === document.querySelector('h1'))).toBe(true);
  expect(errors).toEqual([]);
});

test('scrolling needs no section downloads or observer callbacks', async ({ page, isMobile }) => {
  await page.addInitScript(() => {
    window.IntersectionObserver = class {
      root = null; rootMargin = '0px'; thresholds = [0];
      observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
    } as unknown as typeof IntersectionObserver;
  });
  const scripts: string[] = [];
  page.on('request', request => { if (request.resourceType() === 'script') scripts.push(request.url()); });
  await page.goto('/');
  await expect(page.locator('button[type=submit]')).toBeEnabled();
  for (const id of ['biography', 'works', 'coaching', 'inquiries']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
  }
  await expectContent(page);
  expect(scripts.filter(url => /BiographySection|WorksSection|CoachingSection|InquiriesSection|ScrollReveal/.test(url))).toEqual([]);
  if (isMobile) expect(scripts.filter(url => /motion-|SpotlightCursor/.test(url))).toEqual([]);
});

test('booking selection and submission still work after hydration', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  // Never send a real inquiry from a regression test.
  await page.route('**/api/send-email', route => route.fulfill({ json: { success: true } }));
  await page.goto('/#coaching');
  await expect(page.locator('button[type=submit]')).toBeEnabled();
  await page.getByRole('button', { name: /02 Audition/ }).click();
  await page.getByRole('button', { name: 'Book This Session', exact: true }).click();
  await expect(page.locator('#objective')).toHaveValue('Audition & Self-Tape Prep');
  await page.locator('#fullName').fill('Loading Regression Test');
  await page.locator('#email').fill('test@example.com');
  await page.locator('button[type=submit]').click();
  await expect(page.locator('#inquiries')).toContainText(/received|thank|sent/i);
  expect(errors).toEqual([]);
});
