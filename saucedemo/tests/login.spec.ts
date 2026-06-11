import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { standartUser, lockedUser, userWithWrongPassword, userWithEmptyUserName } from '../test-data/users';

test.describe('Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('standard_user log in and sees inventory page', async ({ page }) => {
        await loginPage.login(standartUser.username, standartUser.password);
        await expect(page, 'User should redirect to inventory page').toHaveURL(/inventory/);
    });

    test('locked_out_user cannot log in and sees error', async ({ page }) => {
        await loginPage.login(lockedUser.username, lockedUser.password);
        await expect(loginPage.errorMessage, 'User should get error message').toContainText('Sorry, this user has been locked out.');
    });

    test('wrong password shows error message', async ({ page }) => {
        await loginPage.login(userWithWrongPassword.username, userWithWrongPassword.password);
        await expect(loginPage.errorMessage, 'Wrong password should show error message').toBeVisible();
    });

    test('empty username shows validation error', async ({ page }) => {
        await loginPage.login(userWithEmptyUserName.username, userWithEmptyUserName.username);
        await expect(loginPage.errorMessage, 'Empty username should shows validation error message').toBeVisible();
    });

});