import {  Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from '@lib/WebActions';
import { testConfig } from 'testConfig';


let webActions: WebActions;

export class LoginPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly USERNAME_EDITBOX: Locator;
  readonly PASSWORD_EDITBOX: Locator;
  readonly LOGIN_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.USERNAME_EDITBOX = page.locator('');
    this.PASSWORD_EDITBOX = page.locator('');
    this.LOGIN_BUTTON = page.locator('');

  }

  async navigateToURL(): Promise<void>{
    await this.page.goto("/");
  }

  async clickOnLoginButton(): Promise<void>{
    await this.LOGIN_BUTTON.click();
  }

  async LoginToApplication(): Promise<void>{
    await this.USERNAME_EDITBOX.fill(testConfig.username);
    await this.PASSWORD_EDITBOX.fill(testConfig.password);
    await this.LOGIN_BUTTON.click();
  }

  

}