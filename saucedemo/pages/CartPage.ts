import { type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly revomeButton: Locator;
    readonly itemInCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.revomeButton = page.getByRole('button', { name: 'Remove'});
        this.itemInCart = page.locator('[data-test="item-4-title-link"]');
    }

    async removeProduct() {
        await this.revomeButton.first().click();
    }

}