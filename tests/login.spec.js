const {test,expect} = require('@playwright/test');
const login = require('../Locators/login');
const data = require('../testdata/loaddata');

test('valid login', async ({ page }) => {
  await page.goto(login.url);
  await page.click(login.Allow_cookies);
  await page.fill(login.email, data.Loginpage.email_input);
  await page.fill(login.password, data.Loginpage.password_input);
  console.log(data.Loginpage.password_input);
  await page.click(login.login_button);
  await expect(page).toHaveURL(login.Finalurl);
});

test('invalid login', async ({ page }) => {
  await page.goto(login.url);
  await page.click(login.Allow_cookies);
  await page.fill(login.email, 'invalid@example.com');
  await page.fill(login.password, 'wrongpassword');
  await page.click(login.login_button);
  await expect(page).toHaveURL(login.url);
});


