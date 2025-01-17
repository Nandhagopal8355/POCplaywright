import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-destination.dwellworks.com/Account/Login');
  await page.locator('input[name="Email"]').click();
  
  await page.locator('input[name="Email"]').fill('rveerachamy@dwellworks.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('Optisol@14');
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#primaryNav div').filter({ hasText: 'menu' }).getByRole('link')).toBeVisible();
});