import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const products = page.locator('[data-test^="product-"]');
  await expect(products.first()).toBeVisible();

  const count = await products.count();
  const randomIndex = Math.floor(Math.random() * count);

  await products.nth(randomIndex).scrollIntoViewIfNeeded();
  await products.nth(randomIndex).click();

  await Promise.all([
    expect(page.getByText('Product added to shopping cart')).toBeVisible({ timeout: 5000 }),
    page.locator('[data-test="add-to-cart"]').click()
  ]);
});