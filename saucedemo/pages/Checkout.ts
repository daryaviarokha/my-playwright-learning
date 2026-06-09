import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly checkout: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page; 
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.postalCodeField = page.getByPlaceholder('Zip/Postal Code');
        this.checkout = page.getByRole('button', {name: 'checkout'});
        this.continueButton = page.getByRole('button', {name: 'continue'});
        this.finishButton = page.getByRole('button', {name: 'finish'});
        this.successMessage = page.locator('[data-test="complete-header"]');
    }

    async goCheckout(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
    }

    async proceedToCheckoutStepTwo() {
        await this.continueButton.click();
    }

}