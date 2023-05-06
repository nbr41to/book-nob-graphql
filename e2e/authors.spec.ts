import { test, expect } from '@playwright/test';

test('Create author', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?id=pages-authors--default',
  );
  await page.getByRole('button', { name: 'New author' }).click();
  await page.getByLabel('name').click();
  await page.getByLabel('name').fill('John Doe');
  await page.getByLabel('email').click();
  await page.getByLabel('email').fill('example@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();
});
