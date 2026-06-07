import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
loginPage = new LoginPage(page);
await loginPage.open();
});

test('standard_user log in and sees inventory page', async ({ page }) => {
await loginPage.login('standard_user','secret_sauce');
await expect(page, 'User should redirect to inventory page').toHaveURL(/inventory/);
});

test('locked_out_user cannot log in and sees error', async ({ page }) => {
await loginPage.login('locked_out_user','secret_sauce');
await expect(loginPage.errorMessage, 'User should get error message').toContainText('Sorry, this user has been locked out.');
});

test('wrong password shows error message', async ({ page }) => {
await loginPage.login('standard_user', 'wrong_password');
await expect(loginPage.errorMessage, 'Wrong password should show error message').toBeVisible();
});

test('empty username shows validation error', async ({ page }) => {
await loginPage.login('', 'secret_sauce');
await expect(loginPage.errorMessage, 'Empty username should shows validation error message').toBeVisible();
});

});