

import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { chromium } from '@playwright/test';

test('landing page test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html');
    const logo = page.getByTestId('logo')
    await expect(logo).toBeVisible();
    const heading: Locator = page.locator('h1')
    await expect(heading).toHaveText('Acme Testing Site')
    const subheading: Locator = page.locator("[data-testid='logo'] p")
    await expect(subheading).toHaveText('A minimal page for automation practice')


});

test('form check', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/index.html')
    const heading: Locator = page.locator('#form-heading')
    await expect(heading).toHaveText('User sign-up form')

})