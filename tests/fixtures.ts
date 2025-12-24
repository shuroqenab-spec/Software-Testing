import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await use(page);
  },
});

export { expect };
