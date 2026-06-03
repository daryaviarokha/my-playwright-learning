import { test, expect } from '@playwright/test'

test.describe('Saucedemo', () => {

test.describe('Validation Login Page', () => {

test('task2', async ({page}) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user1');
    await page.getByPlaceholder('Password').fill('secret_sauce1');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.getByTestId('error'), 'Error should appear for wrong credentials').toBeVisible();
});

test('task5', async ({page}) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.locator('.error-message-container'), "Epic sadface: You can only access '/inventory.html' when you are logged in.").toBeVisible();

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.locator('.error-message-container'), "Epic sadface: Password is required").toBeVisible();


    await page.getByPlaceholder('Username').clear();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.locator('.error-message-container'), "Epic sadface: Username is required").toBeVisible();
});

test('locked user', async ({ page }) => {
    await page.goto('/');
    
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.locator('[data-test="error"]')).toContainText(
    "Epic sadface: Sorry, this user has been locked out");
});

}); 

test.describe('Logged in User', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page, 'User should redirect to inventory page after login').toHaveURL(/inventory/);
    });

test('task1', async ({page}) => {
    await expect(page, 'User should stay on the inventory page after login').toHaveURL(/inventory/);
});

test('task3', async ({page}) => {
    await page.getByRole('button', { name: 'Add to cart'}).first().click();
    await expect(page.locator(".shopping_cart_badge"), "Cart badge should show 1 after adding a product").toHaveText("1");
});

test('task4', async ({page}) => {
    await page.getByRole('button', { name: 'Add to cart'}).first().click();
    await page.getByRole('button', { name: 'Remove'}).first().click();
    await expect(page.locator(".shopping_cart_badge"),"Cart badge should not be visible after removing product").not.toBeVisible();
});

test('task7', async ({ page }) => {
    await page.getByRole('button', { name: 'Add to cart'}).first().click();
    await page.getByRole('button', { name: 'Remove'}).first().click();

    await page.getByRole('button', { name: 'Add to cart'}).nth(2).click();
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();

    await expect(page.locator(".shopping_cart_badge"),"Cart badge should not shown 1 after adding a product").not.toBeVisible();
});

test('multiplу products', async ({ page }) => {
    await page.getByRole('button', { name: 'Add to cart'}).first().click();
    await page.getByRole('button', { name: 'Add to cart'}).nth(1).click();
    await page.getByRole('button', { name: 'Add to cart'}).nth(2).click();
    await expect(page.locator(".shopping_cart_badge"), "Cart badge should show 3 after adding a product").toHaveText("3");

    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
    await expect(page.locator(".shopping_cart_badge"), "Cart badge should show 1 after adding a product").toHaveText("1");
});

test('sorting', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_item').first(),'First product in the list is changed ').not.toHaveText('Sauce Labs Backpack');
});

test('state after refresh', async ({ page}) => {
    await page.getByRole('button', { name: 'Add to cart'}).first().click();
    await page.reload();
    await expect(page.locator('.shopping_cart_badge'), 'Added item is stil in the bag').toHaveText("1");
});
}); 

});

