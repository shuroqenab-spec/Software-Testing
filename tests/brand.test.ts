import { test, expect } from './fixtures';


test('BrandFilter - single brand', async ({ page }) => {


  const brandCheckbox = page.getByLabel('ForgeFlex Tools');

  await brandCheckbox.check();

  await expect(brandCheckbox).toBeChecked();

});