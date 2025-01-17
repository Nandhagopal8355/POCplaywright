const {test,expect}= require('@playwright/test');
const locator = require('../Locators/login');
const testdata = require('../testdata/loaddata');

test('validcredentials',async({page})=>{

    await page.goto(locator.url);
    await page .fill(locator.email,testdata.Loginpage.email_input);   
    await page .fill(locator.password,testdata.Loginpage.password_input);
    await page .click(locator.Cookies);
    await page .click(locator.Loginbutton);
    await expect(page).toHaveURL(locator.Finalurl);
    

});

test('invalidcredentials',async({page})=>{

    await page.goto(locator.url);
    await page .fill(locator.email,testdata.Loginpage.invalid_email_input);   
    await page .fill(locator.password,testdata.Loginpage.invalid_password_input);
    await page .click(locator.Cookies);
    await page .click(locator.Loginbutton);
    await expect(page).toHaveURL(locator.url);
   
    
});

