import { test } from '@playwright/test';

test('sort products and finish', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const sort = page.locator('[data-test="sort"]');

  await sort.selectOption('name,asc');
  await sort.selectOption('price,desc');
});
