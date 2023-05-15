import { Page, BrowserContext, Locator, expect } from "@playwright/test";

export class InteractionsPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly DRAGGABLE: Locator;
  readonly DROPPABLE: Locator;

  constructor(page: Page, context: BrowserContext){
    this.page = page;
    this.context = context;
    this.DROPPABLE = page.locator('');
    this.DRAGGABLE = page.locator('');
  }

  async verifyDragandDrop(): Promise<void>{
    await this.DRAGGABLE.hover();
    await this.DROPPABLE.hover();
    await this.page.mouse.up();
    await expect(this.DROPPABLE).toContainText('Dropped');
  }
}