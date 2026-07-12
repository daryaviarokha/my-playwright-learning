import { test, expect } from "@playwright/test"

test('search product', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    const сonsentButton = page.getByRole('button', { name: 'Consent' });
    if (await сonsentButton.isVisible()) {
        await сonsentButton.click();
    }
    await expect(page, 'HomePage is visible').toHaveURL('https://automationexercise.com');
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page, 'User redirect to page with list of products').toHaveURL(/products/);
    await page.getByPlaceholder('Search Product').fill('Top');
    await page.locator('#submit_search').click();
    await expect(page.getByText('Searched Products'), 'Searched Product title is visible').toBeVisible();
    await expect(page, 'User redirect to page with correct results').toHaveURL(/search=Top/);
});

test('verify all products and product detail page', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    const сonsentButton = page.getByRole('button', { name: 'Consent' });
    if (await сonsentButton.isVisible()) {
        await сonsentButton.click();
    }
    await expect(page, 'HomePage is visible').toHaveURL('https://automationexercise.com');
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.getByText('ALL PRODUCTS'), 'All Products title is visble').toBeVisible();
    await page.getByRole('link', { name: 'View Product' }).first().click();
    await expect(page, 'User redirect to product detail page').toHaveURL(/product_details\/1/);
    await expect(page.getByRole('heading', { name: 'Blue Top' }), 'Product name is visble').toBeVisible();
    await expect(page.getByText('Category: Women > Tops'), 'Product Category is visble').toBeVisible();
    await expect(page.getByText('Rs.'), 'Product Price is visble').toBeVisible();
    await expect(page.getByText('Availability:'), 'Availability parameter is visble').toBeVisible();
    await expect(page.getByText('Condition:'), 'Condition parameter is visble').toBeVisible();
    await expect(page.getByText('Brand:'), 'Brand parameter is visble').toBeVisible();
});

test('add product in the card and verify', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    const сonsentButton = page.getByRole('button', { name: 'Consent' });
    if (await сonsentButton.isVisible()) {
        await сonsentButton.click();
    }
    await expect(page, 'HomePage is visible').toHaveURL('https://automationexercise.com');
    await page.getByRole('link', { name: ' Products' }).click();
    await page.locator('.product-image-wrapper').first().hover();
    await page.locator('.product-overlay').first().getByText('Add to cart').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.locator('.product-image-wrapper').nth(1).hover();
    await page.locator('.product-overlay').nth(1).getByText('Add to cart').click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator('#product-1'), 'The first product is in cart').toBeVisible();
    await expect(page.locator('#product-2'), 'The second product is in cart').toBeVisible();

    await expect(page.getByRole('cell', { name: 'Rs.' }).first(), 'Price of first product is displayed').toBeVisible();
    await expect(page.locator('#product-1').getByRole('cell', { name: '1' }), 'Quatity the first product is displayed').toBeVisible();
    await expect(page.getByRole('cell', { name: 'Rs.' }).nth(1), 'Total price of first product is displayed').toBeVisible();

    await expect(page.getByRole('cell', { name: 'Rs.' }).nth(2), 'Price of first product is displayed').toBeVisible();
    await expect(page.locator('#product-2').getByRole('cell', { name: '1' }), 'Quatity the first product is displayed').toBeVisible();
    await expect(page.getByRole('cell', { name: 'Rs.' }).nth(3), 'Total price of first product is displayed').toBeVisible();
});

test('remove product', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    const сonsentButton = page.getByRole('button', { name: 'Consent' });
    if (await сonsentButton.isVisible()) {
        await сonsentButton.click();
    }
    await expect(page, 'HomePage is visible').toHaveURL('https://automationexercise.com');
    await page.getByRole('link', { name: ' Products' }).click();
    await page.locator('.product-image-wrapper').nth(1).hover();
    await page.locator('.product-overlay').nth(1).getByText('Add to cart').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.locator('.product-image-wrapper').nth(4).hover();
    await page.locator('.product-overlay').nth(4).getByText('Add to cart').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();
    await expect(page, 'User redirect to Cart page').toHaveURL(/view_cart/);
    await page.locator('.cart_quantity_delete').first().click();
    await expect(page.locator('#cart_info_table tbody tr'), 'The table should containg only one line of product').toHaveCount(1);
});

test('submit contact form', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    const сonsentButton = page.getByRole('button', { name: 'Consent' });
    if (await сonsentButton.isVisible()) {
        await сonsentButton.click();
    }
    await expect(page, 'HomePage is visible').toHaveURL('https://automationexercise.com');
    await page.getByRole('link', { name: ' Contact us' }).click();
    await expect(page, 'User redirect to Contact Us page').toHaveURL(/contact_us/);
    await page.getByRole('textbox', { name: 'Name' }).fill('test');
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test@test.com');
    await page.getByRole('textbox', { name: 'Subject' }).fill('test');
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill('test');
    await page.locator('input[type=file]').setInputFiles('test-files/contact_us');
    await page.getByRole('button', { name: 'Submit' }).click();
});

