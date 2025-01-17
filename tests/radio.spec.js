const {test,expect}= require('@playwright/test');
const locator = require('../Locators/login');
const radio = require('../Locators/radio');
const testdata = require('../testdata/loaddata');

test.beforeEach('checkstatus',async({page})=>{

    await page.goto(locator.url);
    await page .fill(locator.email,testdata.Loginpage.email_input);   
    await page .fill(locator.password,testdata.Loginpage.password_input);
    await page .click(locator.Cookies);
    await page .click(locator.Loginbutton);
    await expect(page).toHaveURL(locator.Finalurl);

});

test('radio',async({page})=>{

    await page.waitForTimeout(5000);

    await page.click(radio.Includetestorder);
    await page.waitForTimeout(5000);
    await page.click(radio.unassignDSC);
    await expect(page.locator(locator.NameFin)).toBeTruthy();
    await expect(page.locator(locator.Namepavi)).toBeTruthy();
    
});