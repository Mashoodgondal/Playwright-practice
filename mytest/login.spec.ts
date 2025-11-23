


// test('form check', async () => {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const page: Page = await browser.newPage()
//     await page.goto('http://127.0.0.1:5500/index.html')
//     const heading: Locator = page.locator('#form-heading')
//     await expect(heading).toHaveText('User sign-up form')

// })




import { test, expect, chromium, Browser, Page, Locator } from '@playwright/test';

let browser: Browser;
let page: Page;

test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html');
});

test('Logo and header should be visible', async () => {
    const logo = page.getByTestId('logo');
    await expect(logo).toBeVisible();

    await expect(page.locator('h1')).toHaveText('Acme Testing Site');
    await expect(page.locator('[data-testid="logo"] p')).toHaveText('A minimal page for automation practice');
});

test('Form heading is correct', async ({ page }) => {
    await expect(page.locator('#form-heading')).toHaveText('User sign-up form');
});

test('User can fill out the signup form', async ({ page }) => {
    const name = page.getByTestId('input-name');
    const email = page.getByTestId('input-email');
    const password = page.getByTestId('input-password');
    const checkbox = page.getByTestId('checkbox-terms');
    const radioFree = page.getByTestId('radio-free');
    const radioPro = page.getByTestId('radio-pro');

    await name.fill('Ali Ahmed');
    await expect(name).toHaveValue('Ali Ahmed');

    await email.fill('aliahmad@gmail.com');
    await expect(email).toHaveValue('aliahmad@gmail.com');

    await password.fill('ali321');
    await expect(password).toHaveValue('ali321');

    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await expect(radioFree).toBeChecked();
    await radioPro.check();
    await expect(radioPro).toBeChecked();
    await expect(radioFree).not.toBeChecked();
});

test.describe('spinner test', () => {
    test('spinner appereance', async ({ page }) => {
        const selectCountry = page.getByTestId('select-country');
        await expect(selectCountry).toBeVisible()
        const defaultValue = await selectCountry.inputValue()
        expect(defaultValue).toBe('')
    })
    test('test spinner items', async ({ page }) => {
        const countryTest = page.getByTestId('select-country');
        await expect(countryTest).toBeVisible();
        const optionTexts = await countryTest.locator('option').allTextContents();
        expect(optionTexts).toEqual([
            'Select country',
            'Pakistan',
            'United States',
            'India',
            'United Kingdom'
        ]);
    });
})

