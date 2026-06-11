# Final Project — Playwright Test Suite

## Test target
SauceDemo (https://www.saucedemo.com)

## Covered user journey
Login → product selection → cart → checkout -> sorting price from low to high

## Test cases
- Standard_user log in and sees inventory page
- Locked_out_user cannot log in and sees error
- Wrong password shows error message
- Empty username shows validation error
- Cart badge shows correct count after adding a product
- Cart page shows the name of the selected product
- Removing a product updates the cart
- Adding multiple products shows correct badge count
- Product sorting
- User can finish order

## Project structure
- `pages/` — Page Object classes (LoginPage, InventoryPage, CartPage, CheckoutPage)
- `tests/` — test specs (*.spec.ts)
- `test-data/` — credentials and test inputs
- `playwright.config.ts` — configuration

## How to run
```bash
npm install
npx playwright install
npx playwright test saucedemo/tests
npx playwright show-report
```

## Notes
- No hard waits (`waitForTimeout`) are used
- Tests use semantic locators (`getByRole`, `getByTestId`, `getByPlaceholder`)
- Test data is stored separately from test logic

## Known limitations
- This suite covers only the selected user journey
- It does not cover all possible edge cases