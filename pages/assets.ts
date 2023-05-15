
import { Page, Locator, expect, Browser} from "@playwright/test"

export class assets{
    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;

    constructor(page: Page){
        this.page = page
        this.username_textbox = page.locator("input[name='Email']");
        this.password_textbox = page.locator("input[name='Password']");
        this.login_button = page.getByRole("button", { name: "Sign in" });
    }

    async gotoLoginPage(){
        await this.page.goto("https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F");
    }
    
    async login(username: string, password: string){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    
}