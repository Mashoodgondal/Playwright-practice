

// import { test, expect, Browser, Page, Locator } from '@playwright/test';
// import { chromium } from '@playwright/test';

// test('landing page test', async () => {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const page: Page = await browser.newPage();

//     await page.goto('http://127.0.0.1:5500/index.html');
//     const logo = page.getByTestId('logo')
//     await expect(logo).toBeVisible();
//     const heading: Locator = page.locator('h1')
//     await expect(heading).toHaveText('Acme Testing Site')
//     const subheading: Locator = page.locator("[data-testid='logo'] p")
//     await expect(subheading).toHaveText('A minimal page for automation practice')
// });


//  import { test, expect, Browser, Page, Locator } from '@playwright/test';
// import { chromium } from '@playwright/test';

// test('landing page test', async () => {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const page: Page = await browser.newPage();

//     await page.goto('http://127.0.0.1:5500/index.html');
//     const logo = page.getByTestId('logo')
//     await expect(logo).toBeVisible();
//     const heading: Locator = page.locator('h1')
//     await expect(heading).toHaveText('Acme Testing Site')
//     const subheading: Locator = page.locator("[data-testid='logo'] p")
//     await expect(subheading).toHaveText('A minimal page for automation practice')
// });



test('form check', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/index.html')
    const heading: Locator = page.locator('#form-heading')
    await expect(heading).toHaveText('User sign-up form')

})

// test('form test', async () => {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const page: Page = await browser.newPage()
//     await page.goto('http://127.0.0.1:5500/index.html#')
//     const form: Locator = page.locator('.mt-6.grid.gap-4')
//     await expect(form).toBeVisible()
//     const nameInput: Locator = page.locator('input[name="name"]')
//     await nameInput.fill('ali ahmed')
//     await expect(nameInput).toHaveValue('ali ahmed')
//     const emailInput: Locator = page.locator('input[name="email"]')
//     await emailInput.fill('aliahmad@gmail.com')
//     await expect(emailInput).toHaveValue('aliahmad@gmail.com')
//     const passwordInput: Locator = page.locator('input[name="password"]')
//     await passwordInput.fill('ali321')
//     await expect(passwordInput).toHaveValue('ali321')
//     const checkbox: Locator = page.locator('input[type="checkbox"]')
//     await checkbox.check()
//     await expect(checkbox).toBeChecked()
//     const fieldSet: Locator = page.locator('fieldset.mt-2')
//     await expect(fieldSet).toBeVisible()
//     const radiofree: Locator = page.locator('fieldset.mt-2 .mt-2.flex.gap-4 label:first-child input')
//     const radiopro: Locator = page.locator('fieldset.mt-2 .mt-2.flex.gap-4 label:last-child input')
//     await expect(radiofree).toBeChecked()
//     await expect(radiopro).not.toBeChecked()
//     await radiopro.check()
//     await expect(radiopro).toBeChecked()
//     await expect(radiofree).not.toBeChecked()

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
