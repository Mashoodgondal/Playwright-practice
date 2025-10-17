import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('check navigation menu is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check if the main navigation bar is visible
  await expect(page.locator('nav')).toBeVisible();
});
test('docs link redirects correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click on the Docs link in the top menu
  await page.getByRole('link', { name: 'Docs' }).click();

  // Verify the URL contains 'docs'
  await expect(page).toHaveURL(/.*docs/);
});




// test('docs link redirects correctly', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click on the Docs link in the top menu
//   await page.getByRole('link', { name: 'Docs' }).click();

//   // Verify the URL contains 'docs'
//   await expect(page).toHaveURL(/.*docs/);
// });
// test('docs link redirects correctly', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click on the Docs link in the top menu
//   await page.getByRole('link', { name: 'Docs' }).click();

//   // Verify the URL contains 'docs'
//   await expect(page).toHaveURL(/.*docs/);
// });