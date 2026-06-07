import { test, expect } from "@playwright/test"

test('select/unselect checkboxes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes'); 

  const checkbox1 = page.getByRole('checkbox').first();
  const checkbox2 = page.getByRole('checkbox').nth(1);

  await expect(checkbox1, 'Checkbox1 is unchecked by default').not.toBeChecked();
  await expect(checkbox2, 'Checkbox2 is checked by deafult').toBeChecked();

  await checkbox1.check();
  await expect(checkbox1, 'Checkbox1 is checked now').toBeChecked();

  await checkbox2.uncheck();
  await expect(checkbox2, 'Checkbox2 is uncheck now').not.toBeChecked();
});

test('select dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown'); 

    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown'), 'OPtion 1 is selected').toHaveValue('1');
});

test('dynamic loading ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading'); 

    await page.getByRole('link', { name: 'Example 1: Element on page' }).click();
    await page.getByRole('button', { name: 'Start' }).click();

    await expect(page.locator('#loading').getByRole('img'), 'Loading is visible').toBeVisible(); 
    await expect(page.getByRole('heading', { name: 'Hello World!' }), 'Final text is visible after loading').toBeVisible();
});

test('check upladed file name', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload'); 

    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('test-files/upload_file');
    await page.getByRole('button', {name: 'Upload'}).click();

    await expect(page.getByRole('heading', { name: 'File Uploaded!' }), 'File Uploaded! title is displaye').toContainText('File Uploaded');
});

test('broken image', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/broken_images'); 

  //await expect(page.getByRole('img').nth(1), 'The img is not visible').not.toBeVisible();
});