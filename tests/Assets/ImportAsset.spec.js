import { test, expect } from "@playwright/test";
import { assets } from "../../pages/assets.js";



test.describe("Create New record and update", () => {
   
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

    test.afterEach(async ({page})=>{
        await page.close();
      });

      test('Import Asset Record and update', async({ page} ) => {
        const login = new assets(page);
        const filepath0 = './fixture/file/AssetsImport.xlsx';
        //Login to Application
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login('deepakr@inzerotech.com', 'Deepak@605');  
      
        // await page.pause();
        //Click on New 
        await page.getByRole('link', { name: ' New' }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Import Assets' }).click();
        await page.getByText('Import Assets').click();
        await page.setInputFiles('#selected-file', filepath0);
        await page.click('#asset-import-select-button[type="button"]');
        await page.waitForTimeout(1000);
        await page.locator(".avatar-initials").click();
        await page.locator("//ul[@class='pcx-dropdown-menu primary-nav-dropdown-menu user-dropdown-menu align-right']/li[4]").click();
        await page.waitForTimeout(100);

      });
});