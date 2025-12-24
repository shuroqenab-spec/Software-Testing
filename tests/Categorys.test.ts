import { test, expect } from '@playwright/test';

test('Category - single category filter', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const hammerCheckbox = page.locator('#filters').getByLabel('Hammer');

  await hammerCheckbox.check();

  await expect(hammerCheckbox).toBeChecked();

});