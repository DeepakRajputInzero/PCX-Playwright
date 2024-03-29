import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets.js";



test.describe("Create New Loop record", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

    test.afterEach(async ({page})=>{
        await page.close();
      });

      test("Create New Loop record-Test Point Accuracy", async({ page }) => {
        const login = new assets(page);
        //Login to Application
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login('deepakr@inzerotech.com', 'Deepak@605');
        
        //Click on New 
        await page.getByRole('link', { name: ' New' }).click();
        //Click on New Loop
        await page.getByText('Loop').click();
        //Maximize window
        await page.locator('//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]').click();
        //Fill Page Details
        var minNumber = 40;
        var maxNumber = 1000;

        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min,max)
        {
          return Math.floor(Math.random()*(max-min+1)+min);
        }
        
        let locString = 'Loop-Id-00' + randomNumber;
       //random value input in Asset ID
        await page.locator('#dialog-asset-id').click();
        await page.locator('#dialog-asset-id').fill(locString);
        await page.locator('#dialog-asset-name').click();
        // await page.pause()
        await page.locator('#dialog-asset-name').fill('Instrument Calibration');
       
        await page.locator('select[name=\'PhysicalLocationId\']').selectOption('51');        
      // Select Department 
        await page.locator('select[name=\"DepartmentId\"]').selectOption('34');
        await page.locator('.selectize-input').click();
        //Select Classification
        await page.click('//*[@id="tab-asset-details"]/div[2]/div[2]/div[4]/div/div[1]')
        await page.getByText('Classification 1').click();
        await page.getByText('Critical', { exact: true }).click();
        //Fill Functional Location
        await page.locator('input[name="FunctionalLocation"]').click();
        await page.locator('input[name="FunctionalLocation"]').fill('Noise Room');
        await page.click('//*[@id="tab-asset-details"]/div[3]/div[3]/select');
        await page.locator('//*[@id="tab-asset-details"]/div[3]/div[3]/select').selectOption('3');
         //Manual Date field method
        //  await page.pause()
        // const date = "04/06/2023"
        // page.fill('//*[@id="tab-asset-details"]/div[3]/div[2]/div/input', date);
        //  await page.locator('//*[@id="tab-asset-details"]/div[3]/div[2]/div/input').click();
    
        // Date pic
        await page.click('//*[@id="tab-asset-details"]/div[3]/div[2]/div/input');
        const mmYY = page.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a');
        const prev = page.locator('//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[1]');
        const next = page.locator('//*[@id="ui-datepicker-div"]/div/a[2]');
        await next.click();
        await page.click('//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]');     
        //Fill Remarks
        await page.getByText('Remarks').click();
        await page.locator('#dialog-asset-remarks').fill('Calibration');
        //Click on Components Tab
        await page.getByRole('listitem').filter({ hasText: 'Components' }).click();
        await page.click('//*[@id="loop-component-add-button"]');
        await page.click('//*[@id="createAttachment"]/form/div/div/div/div[1]');
        //  await page.pause();
        await page.getByText('Absolute Pressure Gauge').click();        
        await page.getByText('369').click();
        await page.getByText('Dryer').click();
        await page.click('//*[@id="loop-components-instruments-select-button"]');
        await page.getByRole('listitem').filter({ hasText: 'Test Specifications' }).click();
        
        let locString1 = 'Asset-Calibration-00' + randomNumber;
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill(locString1);
        await page.locator('//div[@class="dialog-test-specification-container"]/div[1]/div[3]/select').selectOption('3');
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[1]/div[1]/select').click();
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[1]/div[1]/select').selectOption('3');
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[3]/div[2]/input').click();
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[3]/div[2]/input').fill('10');
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[3]/div[3]/input').click();
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[3]/div[3]/input').fill('50');
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[3]/div[4]/select').selectOption('2');
       
        await page.locator("//div[@class='dialog-test-specification-container']/div[2]/div[3]/div[5]/div[1]/div[1]/input").fill('nm');
        await page.locator("//div[@class='dialog-test-specification-container']/div[2]/div[3]/div[5]/div[1]/div[2]/div[1]/div[49]").click();
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[5]/div[2]/select').selectOption('2');
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[5]/div[3]/input').click();
        await page.locator('//div[@class="dialog-test-specification-type-container"]/div[5]/div[3]/input').fill('5');
        await page.getByRole("button", { name: "Save and Close" }).click();

        await page.locator(".avatar-initials").click();
        await page
        .locator(
        "//ul[@class='pcx-dropdown-menu primary-nav-dropdown-menu user-dropdown-menu align-right']/li[4]"
        )
        .click();
      });
});
