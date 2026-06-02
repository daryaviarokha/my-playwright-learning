import { test, expect } from '@playwright/test'; // импорт инструментов из 

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');  //  идет на странице по ссылке 
    // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // на странице в тайтле должено быть слово 
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  page.getByRole("button", { name: "Login"});
  page.getByPlaceholder("Username"); 
  page.getByTestId("username"); 
  page.getByTestId("password");
  page.getByPlaceholder("Password");
  

  page.getByRole
  page.getByPlaceholder
  page.getByTestId
  page.getByText // должен быть видимый текст на странице 
   page.locator('[data-test="password"]');
   await page.locator('[data-test="username"]').click();
   await page.locator('[data-test="username"]').fill('locator(\'[data-test="username"]\')');

   page.locator
});

