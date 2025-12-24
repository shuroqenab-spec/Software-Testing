import { test, expect } from "./fixtures";

test("Search for product", async ({ page }) => {
  await page.locator('[data-test="search-query"]').fill("Bolt cutters");

  await page.locator('[data-test="search-submit"]').click();

  const products = page.locator('[data-test^="product-"]');
});
