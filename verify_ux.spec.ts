import { test, expect } from '@playwright/test';

test('verify composer ux improvements', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // 1. Verify "INITIATE TEST" shortcut hint on hover
  const initiateBtn = page.getByRole('button', { name: /INITIATE TEST/i });
  await initiateBtn.hover();
  await page.screenshot({ path: 'initiate_test_hover.png' });

  // 2. Verify "AI AUGMENT" dropdown visibility on focus
  await page.keyboard.press('Tab'); // Navigate through header
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab'); // Should reach AI AUGMENT

  // Take screenshot of focused state
  await page.screenshot({ path: 'augment_dropdown_focus.png' });

  // 3. Verify "+ VARS" dropdown visibility on focus
  await page.keyboard.press('Tab'); // To + VARS
  await page.screenshot({ path: 'vars_dropdown_focus.png' });
});
