const {test,expect}= require('@playwright/test');
const locator = require('../Locators/login');
const dropdown = require('../Locators/dropdown');
const testdata = require('../testdata/loaddata');

test('checkstatus',async({page})=>{

    await page.goto(locator.url);
    await page .fill(locator.email,testdata.Loginpage.email_input);   
    await page .fill(locator.password,testdata.Loginpage.password_input);
    await page .click(locator.Cookies);
    await page .click(locator.Loginbutton);
    await expect(page).toHaveURL(locator.Finalurl);
    

    //dropdown
  await page.click(dropdown.Program_man);
  await page.keyboard.type('Rasikapriya');
  await page .keyboard.press('Enter');
  await expect(page.locator(locator.Display_result)).toBeTruthy();
  await page.click(dropdown.DSC_dropdown);
  await page.keyboard.type('Agent,Odin');
  await expect(page.locator(locator.sorry_result)).toBeTruthy();
 
});

