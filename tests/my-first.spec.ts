import { test, expect } from '@playwright/test';

test('page has the correct title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});


test('page dows not contain eror text', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByText('404 Page Not Found')).not.toBeVisible();
});