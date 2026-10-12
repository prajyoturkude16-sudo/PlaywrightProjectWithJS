import {LoginPageLocators as locators } from '../Locators/LoginPage.locators';

export class LoginPage { 

constructor(page)
{
    this.page = page;
}
    async openURL(URL)
    {
       await this.page.goto(URL);   
    }

    async enterValidCredentials(Username,Password)
    {
        await this.page.locator(locators.txtUsername).fill(Username);
        await this.page.locator(locators.txtPassword).fill(Password);
        await this.page.locator(locators.btnLogin).click();
    }

    async enterInvalidCredentials(Username,Password)
    {
        await this.page.locator(locators.txtUsername).fill(Username);
        await this.page.locator(locators.txtPassword).fill(Password);
        await this.page.locator(locators.btnLogin).click();
    }
  

}
