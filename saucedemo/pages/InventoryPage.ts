import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart'});
    }

    async addToCartFirstProduct() {
        await this.addToCartButton.first().click(); 
    }

    async openCartPage() {
        await this.cartBadge.click();
    }

   
}