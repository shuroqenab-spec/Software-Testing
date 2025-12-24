import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login using email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('email@test.com', 'password123');

  await expect(page).toHaveURL(/auth\/login/);
});
