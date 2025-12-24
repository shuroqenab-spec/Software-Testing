import { test, expect } from '@playwright/test';

test('Register new user', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/register');

  const uniqueEmail = `shuroq.${Date.now()}@example.com`;

  await page.locator('[data-test="first-name"]').fill('Shuroq');
  await page.locator('[data-test="last-name"]').fill('Enab');
  await page.locator('[data-test="dob"]').fill('2005-02-14');
  await page.locator('[data-test="street"]').fill('Main Street 1');
  await page.locator('[data-test="city"]').fill('Nablus');
  await page.locator('[data-test="state"]').fill('Nablus');
  await page.locator('[data-test="country"]').selectOption('IL');
  await page.locator('[data-test="postal_code"]').fill('12345');
  await page.locator('[data-test="phone"]').fill('0591234567');
  await page.locator('[data-test="email"]').fill(uniqueEmail);
  await page.locator('[data-test="password"]').fill('Abs12345@@gsfgsadfl132hdh547fnnf');
  await page.locator('[data-test="register-submit"]').click();
  await expect(page).not.toHaveURL(/\/auth\/register$/);

 await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.locator('[data-test="email"]').fill(uniqueEmail);
  await page.locator('[data-test="password"]').fill('Abs12345@@gsfgsadfl132hdh547fnnf');
  await page.locator('[data-test="login-submit"]').click();

  await expect(page).not.toHaveURL(/\/auth\/login$/);
});
