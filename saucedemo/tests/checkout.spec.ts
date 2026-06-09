import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/Checkout';
import { channel } from 'node:diagnostics_channel';

test.describe('Checkout', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        await loginPage.open();
        await loginPage.login('standard_user','secret_sauce');
    });

    test('User can enter first name, last name, and postal code', async ({ page }) => {
        await test.step('Add item to cart', async () => {
             await inventoryPage.addToCartButton.nth(1).click();
        });
        await test.step('Open cart page and proceed checkout', async () => {
            await inventoryPage.openCartPage();
            await cartPage.proceedToCheckout();
        });
        await test.step('Start checkout', async () => {
            await checkoutPage.goCheckout('Darya', 'test', '123');
            await checkoutPage.proceedToCheckoutStepTwo();
        });
        await test.step('Finish Order', async () => {
            await checkoutPage.finishButton.click();
            await expect(checkoutPage.successMessage, '')
        });
    });

});