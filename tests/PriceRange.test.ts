import { test, expect } from "./fixtures";

test("move slider multiple times and finish", async ({ page }) => {
  const handle = page.locator(".ngx-slider-pointer").first();
  await handle.waitFor({ state: "visible" });
  await handle.scrollIntoViewIfNeeded();
  const box = await handle.boundingBox();
  if (!box) throw new Error("Slider handle bounding box not found");

  const startX = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  await page.mouse.move(startX, y);
  await page.mouse.down();

  await page.mouse.move(startX + 60, y);
  await page.waitForTimeout(150);

  await page.mouse.move(startX + 140, y);
  await page.waitForTimeout(150);

  await page.mouse.move(startX + 220, y);
  await page.waitForTimeout(150);

  await page.mouse.up();
});
