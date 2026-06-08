import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage.ts';
import { CartPage } from '../pages/CartPage.ts';

test.describe('Cart', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login('standard_user','secret_sauce');
    })

    test('cart badge shows correct count after adding a product', async ({ page }) => {
      await inventoryPage.addToCartFirstProduct();
      await expect(inventoryPage.cartBadge, 'Cart badge should show 1 after adding a product').toHaveText('1');
    });

    test('cart page shows the name of the selected product', async ({ page }) => {
     await inventoryPage.addToCartFirstProduct();
     await inventoryPage.openCartPage()
     await expect(page, 'User is redirect to Cart page').toHaveURL(/cart/);
     await expect(cartPage.itemInCart, 'User see name of added to cart item').toContainText('Sauce Labs');
    });

    test('removing a product updates the cart', async ({ page }) => {
     await inventoryPage.addToCartFirstProduct();
     await inventoryPage.openCartPage(); 
     await cartPage.removeProduct();
     await expect(inventoryPage.cartBadge, 'No one item display on cart icon').not.toBeVisible();
    }); 

    test('adding multiple products shows correct badge count', async ({ page }) => {
     await inventoryPage.addToCartFirstProduct();
     await inventoryPage.addToCartButton.nth(2).click();
     await inventoryPage.addToCartButton.nth(3).click();
     await expect(inventoryPage.cartBadge, 'Cart should show 3 items').toHaveText('3');
    });
});