// import { test, expect, Browser, Page } from '@playwright/test';
// import { chromium } from '@playwright/test';

// test('login test', async () => {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const page: Page = await browser.newPage();
//     await page.goto('https://practicetestautomation.com/practice-test-login/');

//     const username = page.locator('#username');
//     const password = page.locator('#password');
//     const loginButton = page.locator('#submit');
//     await username.fill('student');
//     await password.fill('Password123');
//     await loginButton.click();
//     const title = await page.title();
//     await page.screenshot({ path: 'loginpage.png' });
//     expect(title).toBe('Logged In Successfully | Practice Test Automation');
//     //     await browser.close();
// })



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

    // const subheading: Locator = page.locator('p.text-slate-500')
    // await expect(subheading).toHaveText('A minimal page for automation practice ')


    // const username = page.locator('#username');
    // const password = page.locator('#password');
    // const loginButton = page.locator('#submit');

    // await username.fill('student');
    // await password.fill('Password123');
    // await loginButton.click();

    // const title = await page.title();
    // await page.screenshot({ path: 'loginpage.png' });

    // expect(title).toBe('Logged In Successfully | Practice Test Automation');

    // await browser.close();

    // const username = page.locator('#username');
    // const password = page.locator('#password');
    // const loginButton = page.locator('#submit');

    // await username.fill('student');
    // await password.fill('Password123');
    // await loginButton.click();

    // const title = await page.title();
    // await page.screenshot({ path: 'loginpage.png' });

    // expect(title).toBe('Logged In Successfully | Practice Test Automation');

    // await browser.close();
});

test('form check', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/index.html')
    const heading: Locator = page.locator('#form-heading')
    await expect(heading).toHaveText('User sign-up form')

})