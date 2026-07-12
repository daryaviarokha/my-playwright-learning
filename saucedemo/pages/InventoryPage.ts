import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly addToCartButton: Locator;
    readonly sortOption: Locator;
    readonly itemPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.sortOption = page.locator('[data-test="product-sort-container"]');
        this.itemPrice = page.getByTestId('inventory-item-price');
    }

    async addToCartFirstProduct() {
        await this.addToCartButton.first().click();
    }

    async openCartPage() {
        await this.cartBadge.click();
    }

    async sortFromLowToHigh() {
        await this.sortOption.selectOption('lohi');
    };
}