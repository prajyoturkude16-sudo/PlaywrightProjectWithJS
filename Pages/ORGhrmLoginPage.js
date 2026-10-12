export class ORGhrmLoginPage {


    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.btnSubmit = page.locator("[type='submit']");
    }

    async openUrl() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async performLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.btnSubmit.click();
    }
}