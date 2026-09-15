# Loading regression checks

Install browser engines once with `npx playwright install webkit chromium`.
Run `npm run test:loading` to build and test the production output.

The tests cover mobile WebKit, mobile Chromium, and desktop WebKit:

- Actual page content and anchor navigation with JavaScript disabled.
- First paint while every JavaScript download is stalled, followed by hydration without replacing the content or reporting errors.
- Visible sections when IntersectionObserver never delivers a callback; no section scripts requested on scroll.
- Coaching selection and inquiry submission after hydration. The email endpoint is mocked; tests never send email.

Production must use `npm run build`, including its prerender step. Deploy the resulting `dist` directory. Running `vite build` alone omits the HTML content.

These checks reproduce and prevent the application's empty-content failure modes. They do not measure a physical iPhone's connection or identify why Safari on a particular device takes 10–15 seconds to fetch or execute a resource.

## iOS Safari rendering regression

Large Gaussian blur filters can stall actual frame presentation even when reported first-contentful-paint is fast. See [WebKit 315118](https://bugs.webkit.org/show_bug.cgi?id=315118) and [WebKit 322045](https://bugs.webkit.org/show_bug.cgi?id=322045). Decorative glows now use radial alpha masks instead of 140–160px blur filters. The suite checks all six glows and rejects large blur filters in the rendered page.

Desktop WebKit timings alone cannot validate the iOS compositor path. Use iOS Safari screenshots or a screen recording for visual timing. In the iPhone 17 / iOS 26.5 simulator comparison, the original page was still blank at 8 seconds and visible at 20 seconds; the otherwise-identical page with only the large blur effects replaced was visible at 3 seconds. These are screenshot sampling bounds, not exact first-frame timings or physical-device guarantees.
