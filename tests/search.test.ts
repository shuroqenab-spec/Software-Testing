import { test, expect } from '@playwright/test';

test('Search for product', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').fill('Bolt cutters');

  await page.locator('[data-test="search-submit"]').click();

  const products = page.locator('[data-test^="product-"]');
  
});
