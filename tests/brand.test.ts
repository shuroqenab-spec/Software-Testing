import { test, expect } from '@playwright/test';

test('BrandFilter - single brand', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const brandCheckbox = page.getByLabel('ForgeFlex Tools');

  await brandCheckbox.check();

  await expect(brandCheckbox).toBeChecked();

});