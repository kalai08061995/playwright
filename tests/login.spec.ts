import { test, expect } from '@playwright/test';



//launch the login URL
test('Login Url', async ({ page }) => {
  await page.goto('https://demo.cyclos.org/ui/login');
  

  // Fill the username and password field 
  await page.fill('//input[@autocomplete="username"]',"demo");
  await page.fill('//input[@autocomplete="password"]',"1234");


  //Click the submit button
  await page.click('//*[contains(text(),"Submit")]');
});


