exports.loginPage = class loginPage{

    constructor(page){
        this.page = page;
        this.username_textbox = page.$("input[name='Email']");
        this.password_textbox = page.$("input[name='Password']");
        this.login_button = page.$("//*[@id='login-button']");
    }

    async gotoLoginPage(){
        await this.page.goto("https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F");
    }
    
    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    
}