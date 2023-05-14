import { Page, Locator, expect, BrowserContext} from '@playwright/test';
import path from 'path';

export class ElementsPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly ELEMENT_TITLE: Locator;
  readonly TEXT_BOX_TITLE: Locator;
  readonly FULL_NAME_EDITBOX: Locator;
  readonly SUBMIT_BUTTON: Locator;
  readonly HOME_CHECK_BOX: Locator;
  readonly HOME_SELECTED_TEXT: Locator;
  readonly No_RADIO_BUTTON: Locator;
  readonly WEB_TABLES_HEADER: Locator;
  readonly HOME_LINK: Locator;
  readonly DOWNLOAD_BUTTON: Locator;
  readonly UPLOAD_BUTTON: Locator;
  readonly UPLOAD_FILE_TEXT: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    
  }

  async verifyFileDownload(): Promise<void> {
    // Start waiting for download before clicking, Note no Await
    const downloadPromise = this.page.waitForEvent('download');
    await this.DOWNLOAD_BUTTON.click();
    // Wait for the download process to complete.
    const download = await downloadPromise;
    // File will be download in the Downloads folder of those project
    await download.saveAs(path.join(__dirname, `../../Downloads`, download.suggestedFilename()));

  }

  async verifyNewBrowserTab(newPageURLExpected): Promise<void> {
    // Start waiting for new page before clicking
    const pagePromise = this.context.waitForEvent('page');
    
  }

  async verifyFileUpload(): Promise<void> {
    //Select one file
    const uploadFilePath = path.join(__dirname, `../../utils/functional/sampleFile.jpeg`);
    await this.UPLOAD_BUTTON.setInputFiles(uploadFilePath);
    await expect(this.UPLOAD_FILE_TEXT).toBeVisible();
  }

}