import { type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly revomeButton: Locator;
    readonly itemInCart: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.revomeButton = page.getByRole('button', { name: 'Remove'});
        this.itemInCart = page.locator('[data-test="item-4-title-link"]');
        this.checkoutButton = page.getByRole('button', {name: 'checkout'});
    }

    async removeProduct() {
        await this.revomeButton.first().click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

}