import { test, expect } from "../fixtures";

test("sort products and finish", async ({ page }) => {
  const sort = page.locator('[data-test="sort"]');

  await sort.selectOption("name,asc");
  await sort.selectOption("price,desc");
});
