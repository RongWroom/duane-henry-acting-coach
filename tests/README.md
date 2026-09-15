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
