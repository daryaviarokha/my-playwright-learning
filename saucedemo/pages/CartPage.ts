import { type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly removeButton: Locator;
    readonly itemInCart: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.itemInCart = page.locator('.cart_item_label');
        this.checkoutButton = page.getByRole('button', { name: 'checkout' });
    }

    async removeProduct() {
        await this.removeButton.first().click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}