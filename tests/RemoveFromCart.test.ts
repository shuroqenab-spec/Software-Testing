
import { test, expect } from '@playwright/test';
test('Remove From Cart', async ({ page }) => {
await page.goto('https://practicesoftwaretesting.com/');
const products = page.locator('[data-test^="product-"]');
const count = await products.count();
const randomIndex = Math.floor(Math.random() * count);
await products.nth(randomIndex).click();

const toast = page.getByText('Product added to shopping cart');
const toastpromise = expect(toast).toBeVisible({ timeout: 5000 });
await page.locator('[data-test="add-to-cart"]').click();
await toastpromise;
await page.locator('[data-test="nav-cart"]').click();
await page.locator('.btn.btn-danger').click({ force: true });
await expect(page.getByText('The cart is empty. Nothing to display.')).toBeVisible();
});