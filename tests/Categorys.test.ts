import { test, expect } from "../fixtures";

test("Category - single category filter", async ({ page }) => {
  const hammerCheckbox = page.locator("#filters").getByLabel("Hammer");

  await hammerCheckbox.check();

  await expect(hammerCheckbox).toBeChecked();
});
