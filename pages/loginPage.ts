import { Locator, Page } from "@playwright/test";

export default class loginPage{
    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;

    constructor(page: Page){
        this.page = page
        this.username_textbox = page.locator("#login-email");
        this.password_textbox = page.locator("input[placeholder='Password']");
        this.login_button = page.locator('#login-button');
    }

    async navigateUrl(){
        await this.page.goto("https://pcxstaging.primetechpa.com/Identity/Login");
    }
    
    async loginApp(username: string, password: string){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    
}