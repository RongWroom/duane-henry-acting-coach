# Loading regression checks

Install browser engines once with `npx playwright install webkit chromium`.
Run `npm run test:loading` to build and test the production output.

The tests cover mobile WebKit, mobile Chromium, and desktop WebKit:

- The hero and stable section placeholders with JavaScript disabled; below-the-fold content is intentionally loaded by JavaScript as it approaches the viewport.
- First paint while JavaScript is stalled, followed by hydration and loading of the first deferred section without replacing the hero.
- One code-split section chunk per IntersectionObserver activation while scrolling, including anchor navigation and the booking flow.
- Coaching selection and inquiry submission after the relevant sections hydrate. The email endpoint is mocked; tests never send email.

Production must use `npm run build`, including its prerender step. Deploy the resulting `dist` directory. The prerender step writes the hero and reserved section space into `dist/index.html`; section content is loaded by the client as it approaches the viewport.

## iOS Safari rendering regression

Large Gaussian blur filters can stall actual frame presentation even when reported first-contentful-paint is fast. See [WebKit 315118](https://bugs.webkit.org/show_bug.cgi?id=315118) and [WebKit 322045](https://bugs.webkit.org/show_bug.cgi?id=322045). Decorative glows now use radial alpha masks instead of 140–160px blur filters. The suite checks all six glows and rejects large blur filters in the rendered page.

Desktop WebKit timings alone cannot validate the iOS compositor path. Use iOS Safari screenshots or a screen recording for visual timing. In the iPhone 17 / iOS 26.5 simulator comparison, the original page was still blank at 8 seconds and visible at 20 seconds; the otherwise-identical page with only the large blur effects replaced was visible at 3 seconds. These are screenshot sampling bounds, not exact first-frame timings or physical-device guarantees.
