// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
import { test, expect } from '@playwright/test';

// ✅ Helper: Navigate to homepage before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

// ✅ Test 1: Verify page title
test('has correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

// ✅ Test 2: Check main navigation links visibility
test('main navigation links are visible', async ({ page }) => {
  const navLinks = ['Docs', 'API', 'Community', 'Blog'];
  for (const link of navLinks) {
    await expect(page.getByRole('link', { name: link })).toBeVisible();
  }
});

// ✅ Test 3: Verify “Get started” link works correctly
test('navigates to Get Started page', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/docs\/intro/);
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// ✅ Test 4: Verify search functionality
test('can open and use search', async ({ page }) => {
  await page.locator('button.DocSearch-Button').click();
  const searchInput = page.locator('input.DocSearch-Input');
  await searchInput.waitFor({ state: 'visible' });
  await searchInput.fill('locator');
  await expect(page.getByText(/locator/i)).toBeVisible();
});


test('can toggle dark mode', async ({ page }) => {
  const html = page.locator('html');
  const initialTheme = await html.getAttribute('data-theme');

  // Look for any element that toggles color mode
  const themeButton = page.locator('button[aria-label*="Toggle color mode"]');
  await themeButton.waitFor({ state: 'visible', timeout: 10000 });
  await themeButton.click();

  const newTheme = await html.getAttribute('data-theme');
  expect(newTheme).not.toBe(initialTheme);
});


// ✅ Test 6: Check footer has correct content
test('footer has correct text and links', async ({ page }) => {
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  await expect(footer.getByText(/Microsoft/)).toBeVisible();
  await expect(footer.getByRole('link', { name: /GitHub/ })).toBeVisible();
});

// ✅ Test 7: Validate API Docs page loads
test('can open API docs page', async ({ page }) => {
  await page.getByRole('link', { name: /^API$/ }).click();
  await expect(page).toHaveURL(/docs\/api/);

  // Wait for any heading containing "API"
  const apiHeading = page.locator('h1, h2').filter({ hasText: /API/i });
  await apiHeading.first().waitFor({ state: 'visible', timeout: 10000 });
  await expect(apiHeading.first()).toBeVisible();
});
