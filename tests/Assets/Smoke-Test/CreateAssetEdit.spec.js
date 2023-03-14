import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets.js";



test.describe("Create New record and update", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

    test.afterEach(async ({page})=>{
        await page.close();
      });

      test('Create Asset Record and update', async({ page} ) => {
        const login = new assets(page);
        //Login to Application
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login('deepakr@inzerotech.com', 'Deepak@605');  
      
        
        //Click on New 
        await page.getByRole('link', { name: ' New' }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Instrument' }).click();
        await page.getByText('Instrument').click();
        // await page.waitForTimeout(100);
        //Maximize window
        await page.locator('//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]').click();
        //Fill Page Details
        var minNumber = 1000;
        var maxNumber = 40

        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min,max)
        {
          return Math.floor(Math.random()*(max-min+1)+min);
        }
        
        let locString = 'Asset-Id-00' + randomNumber;
       //random value input in Asset ID
        await page.locator('#dialog-asset-id').click();
        await page.locator('#dialog-asset-id').fill(locString);
        await page.locator('#dialog-asset-name').click();
        await page.locator('#dialog-asset-name').fill('Instrument Calibration');
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
       
        await page.locator('//*[@id="tab-asset-details"]/div[3]/div[3]/select').selectOption('3');
      
        // Date pic
        await page.click('//*[@id="tab-asset-details"][@id="tab-asset-details"]/div[3]/div[2]/div/span/i')
        const mmYY = page.locator('//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/div')
        const prev = page.locator('//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[1]')
        const next = page.locator('//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[2]')
        await next.click();
        await page.click('//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/table/tbody/tr[4]/td[6]/a')
      
        
        await page.locator('#dialog-asset-remarks').click();
        await page.locator('#dialog-asset-remarks').fill('Calibration');
        //Click on Test Standard Tab
        // await page.getByRole('listitem').filter({ hasText: 'Test Specifications' }).click();
        
        // let locString1 = 'Asset-Calibration-' + randomNumber;
        // await page.locator('#dialog-test-specification-title').click();
        // await page.locator('#dialog-test-specification-title').fill(locString1);
        // await page.locator('#dialog-test-specification-type-id').selectOption('1');
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeLow"]').click();
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeLow"]').fill('10');
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeHigh"]').click();
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeHigh"]').fill('50');
        // await page.locator('select[name="TestSpecification\\.ManualPassFail\\.RangeResolution"]').selectOption('2');
        // // await page.pause();
        // await page.locator("//*[@id='dialog-test-specification-type-container']/div[1]/div[5]/div/div/input").fill('nm');
        // await page.locator("//*[@id='dialog-test-specification-type-container']/div[1]/div[5]/div/div[2]/div/div[49]").click();
        // await page.locator('select[name="TestSpecification\\.ManualPassFail\\.ToleranceTypeId"]').selectOption('2');
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.Tolerance"]').click();
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.Tolerance"]').fill('5');
        await page.getByRole('button', { name: 'Save and Close' }).click();
        await page.getByRole('link', { name: ' Assets' }).click();
               
        await page.click('.search-options');
        await page.click('#search-asset-id');
        await page.locator('#search-asset-id').fill(locString);
        await page.getByRole('button', { name: 'Search' }).click();
        await page.waitForTimeout(1000);

        await page.click('//body/div[1]/main/div/div[2]/div/div/div/div/div[2]/table/tbody/tr[1]/td');
        await page.locator('div:nth-child(2) > i').first().click();
        
        //Maximize window
        await page.getByTitle('Maximize').click();       
       
       // Random value input in Asset ID
       let locString1 = 'New_Asset-Id-00' + randomNumber;
        await page.locator('#dialog-asset-id').click();
        await page.locator('#dialog-asset-id').fill(locString1);
        
        await page.getByText('Remarks').click();
        await page.locator('#dialog-asset-remarks').fill('Updated Calibration Record');
        await page.getByRole('button', { name: 'Save and Close' }).click();            
   
        // await page.wait(1000);
        await page.locator(".avatar-initials").click();
        await page.locator("//ul[@class='pcx-dropdown-menu primary-nav-dropdown-menu user-dropdown-menu align-right']/li[4]").click();
        await page.waitForTimeout(100);
    
      });
});