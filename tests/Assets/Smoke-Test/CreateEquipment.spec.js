import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets.js";

test.describe("Create New Asset record", () => {
   
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

    test.afterEach(async ({page})=>{
        await page.close();
    });

    test('Create New Equipment Record', async({ page} ) => {
        const login = new assets(page);
        //Login to Application
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login('deepakr@inzerotech.com', 'Deepak@605');      
        
        //Click on New 
        await page.getByRole('link', { name: ' New' }).click();
        
        await page.getByText('Equipment').click();
        await page.locator('//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]').click();
        //Fill Page Details
        var minNumber = 30;
        var maxNumber = 1000;

        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min,max)
        {
          return Math.floor(Math.random()*(max-min+1)+min);
        }
        
        let locString = 'Equiment-Id-00' + randomNumber;
       //random value input in Asset ID
        await page.locator('#dialog-asset-id').click();
        await page.locator('#dialog-asset-id').fill(locString);
        await page.locator('#dialog-asset-name').click();
        await page.locator('#dialog-asset-name').fill('Equipment Calibration');
        await page.locator('#dialog-asset-manufacturer').click();
        await page.locator('#dialog-asset-manufacturer').fill('fluke');
        await page.locator('#ui-id-3').click();
        await page.locator('select[name=\'PhysicalLocationId\']').selectOption('51');
        await page.locator('input[name="ModelNumber"]').click();
        await page.locator('input[name="ModelNumber"]').fill('258');
        await page.locator('input[name="FunctionalLocation"]').click();
        await page.locator('input[name="FunctionalLocation"]').fill('Noise Room');
        await page.locator('input[name="SerialNumber"]').click();
        await page.locator('input[name="SerialNumber"]').fill('25886');
      
        await page.locator('select[name=\"DepartmentId\"]').selectOption('34');
        await page.locator('.selectize-input').click();
       
        await page.getByText('Classification 1').click();
        await page.getByText('Critical', { exact: true }).click();
        
        await page.locator('#dialog-asset-remarks').click();
        await page.locator('#dialog-asset-remarks').fill('Equiment Calibration');
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'Save and Close' }).click();            
   
        // await page.wait(1000);
        await page.locator(".avatar-initials").click();
        await page.locator("//ul[@class='pcx-dropdown-menu primary-nav-dropdown-menu user-dropdown-menu align-right']/li[4]").click();
        await page.waitForTimeout(100);
    });
});