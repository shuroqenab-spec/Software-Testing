import { test, expect } from '@playwright/test';

test('Login using email and password', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.locator('[data-test="email"]').fill('shuroqenabe@gmail.com');
  await page.locator('[data-test="password"]').fill('Abs12345@@#');
  await page.locator('[data-test="login-submit"]').click();

  await expect(page).not.toHaveURL(/\/auth\/login$/);
 
});
