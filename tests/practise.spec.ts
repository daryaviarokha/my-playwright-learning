import { test, expect } from '@playwright/test';

test('week3', async ({page}) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click();

    const products = page.locator('.inventory_item');
    const count = await products.count();
    console.log('The total items: ', count);

    await products.nth(1).locator('[data-test="item-0-title-link"]').click();
    await page.goBack();

    await products.filter({hasText: 'Sauce Labs Bolt T-Shirt'}).locator('.inventory_item_name ').click();


   

});