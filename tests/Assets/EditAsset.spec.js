import { test, expect } from "@playwright/test";
import { assets } from "../../pages/assets.js";



test.describe("Create New Loop record", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

    test.afterEach(async ({page})=>{
        await page.close();
      });
      test('Edit Asset Record and update', async({ page} ) => {
        const login = new assets(page);
        //Login to Application
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login('deepakr@inzerotech.com', 'Deepak@605');
        
        //Click on Asset tab        
        await page.getByRole('link', { name: ' Assets' }).click();
       
        await page.click('//body/div[1]/main/div/div[2]/div/div/div/div/div[2]/table/tbody/tr[1]/td');
        await page.locator('div:nth-child(2) > i').first().click();
        
        //Maximize window
        await page.getByTitle('Maximize').click();
       
        //Fill Page Details
        var minNumber = 100;
        var maxNumber = 40

        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min,max)
        {
          return Math.floor(Math.random()*(max-min+1)+min);
        }
        
        let locString = 'Loop-Id-00' + randomNumber;
       // random value input in Asset ID
        await page.locator('#dialog-asset-id').click();
        await page.locator('#dialog-asset-id').fill(locString);
        
        await page.getByText('Remarks').click();
        await page.locator('#dialog-asset-remarks').fill('Updated Calibration Record');
        await page.getByRole('button', { name: 'Save and Close' }).click();
        // await page.pause();
        
        await page.click('.search-options');
        await page.click('#search-asset-id');
        await page.locator('#search-asset-id').fill(locString);
        await page.getByRole('button', { name: 'Search' }).click();
        await page.waitForTimeout(1000);
        await page.locator(".avatar-initials").click();
        await page.locator("//ul[@class='pcx-dropdown-menu primary-nav-dropdown-menu user-dropdown-menu align-right']/li[4]").click();
        await page.waitForTimeout(100);
    
      });
});