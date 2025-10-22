import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from '@playwright/test';

test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    //     const username = page.locator('#username');
    //     const password = page.locator('#password');
    //     const loginButton = page.locator('#submit');
    //     await username.fill('student');
    //     await password.fill('Password123');
    //     await loginButton.click();
    //     const title = await page.title();
    //     await page.screenshot({ path: 'loginpage.png' });
    //     expect(title).toBe('Logged In Successfully | Practice Test Automation');
    //     await browser.close();
})