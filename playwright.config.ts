import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:43861', trace: 'retain-on-failure' },
  projects: [
    { name: 'mobile-webkit', use: { ...devices['iPhone 13 Pro Max'] } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 7'] } },
    { name: 'desktop-webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 43861 --strictPort',
    url: 'http://127.0.0.1:43861',
    reuseExistingServer: false,
  },
});
