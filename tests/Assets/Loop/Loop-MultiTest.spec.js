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

      test("Create New Instrument record- Manual Test", async ({ page }) => {
 
        const login = new assets(page);
        //Login to Application
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login('deepakr@inzerotech.com', 'Deepak@605');
        
        //Click on New 
        await page.getByRole('link', { name: ' New' }).click();
        //Click on New Instrument
        await page.getByText('Loop').click();
        //Maximize window
        await page.locator('//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]').click();
        //Fill Page Details
        var minNumber = 40;
        var maxNumber = 10000;

        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min,max)
        {
          return Math.floor(Math.random()*(max-min+1)+min);
        }
        
        let locString = 'Loop-MutliTest-Id-00' + randomNumber;
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
        // await page.pause();
        await page.getByText('Absolute Pressure Gauge').click();        
        await page.getByText('369').click();
        await page.getByText('Dryer').click();
        await page.click('//*[@id="loop-components-instruments-select-button"]');

        await page.getByRole('listitem').filter({ hasText: 'Test Specifications' }).click();
       
        //Genrate Asset Id
        let randomManual = "Loop-Manual-00" + randomNumber;
        let randomSwitch = "Loop-Switch-00" + randomNumber;
        let randomTPAcc = "Loop-TPAcc-00" + randomNumber;
        let randomID = "Update-ID-00" + randomNumber;
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill(randomManual);
        await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[1]/div[3]/select'
      )
      .selectOption("1");

        await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div/div[2]/input'
        )
        .click();
  
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div/div[2]/input'
        )
        .fill("10");
      //Fill High Range
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"][@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[3]/input'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"][@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[3]/input'
        )
        .fill("50");
      //Select Resolution
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[4]/select'
        )
        .selectOption("2");
     
      //Select Unit nm
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[5]/div/div[1]/input'
        )
        .fill("nm");
      //Select Tolerance Type
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[5]/div/div[2]/div/div[49]'
        )
        .click();
  
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[2]/select'
        )
        .selectOption("2");
      //Fill Tolerance Field
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input'
        )
        .fill("5");

      await page.getByTitle('Add Test Specification').nth(3).click();

      await page.locator('//*[@id="dialog-test-specifications-container"]/div[3]/div[1]/div[2]/input').fill(randomSwitch);
      await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[3]/div[1]/div[3]/select'
      )
      .selectOption("2");
      //Select Trip Detection Method
    await page
    .locator(
      '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[1]/select'
    )
    .click();
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[1]/select'
      )
      .selectOption("3");
      //Set Point Tolerance
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[2]/input'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[2]/input'
        )
        .fill("5");
      //Fill Low Range
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[2]/input'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[2]/input'
        )
        .fill("10");
      //Fill High Range
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[3]/input'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[3]/input'
        )
        .fill("50");
      //Select Resolution
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[4]/select'
        )
        .selectOption("2");
  
      
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[5]/div[1]/div[1]/input'
        )
        .fill("nm");
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[5]/div[1]/div[2]/div[1]/div[49]'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[5]/div[2]/table[1]/tbody/tr[1]/td[2]/div[1]/input'
        )
        .fill("2");
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[5]/div[2]/table[1]/tbody/tr[1]/td[3]/select'
        )
        .selectOption("1");
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[5]/div[2]/table[1]/tbody/tr[1]/td[4]/select'
        )
        .selectOption("2");
      //Add New Test Point Accuracy
      await page.getByTitle('List View').click();
      await page.locator('//*[@id="dialog-test-specification-list"]/div[1]/div[1]/div[2]/i[1]').click();
      await page.locator('//*[@id="dialog-test-specifications-container"]/div[4]/div[1]/div[2]/input').click();
      await page.locator('//*[@id="dialog-test-specifications-container"]/div[4]/div[1]/div[2]/input').fill(randomTPAcc);
  
      //Select type as Test Point Accuracy
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[1]/div[3]/select'
        )
        .selectOption("3");
      //Fill Low Range
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[1]/div[1]/select'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[1]/div[1]/select'
        )
        .selectOption("3");
      //Fill Low Range
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[2]/input'
        )
        .click();
  
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[2]/input'
        )
        .fill("10");
          
      //Fill High Range
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[3]/input'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[3]/input'
        )
        .fill("50");
      //
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[4]/select'
        )
        .selectOption("2");
      
      // Select Unit
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[5]/div/div/input'
        )
        .fill("nm");
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[5]/div/div[2]/div[1]/div[49]'
        )
        .click();
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[5]/div[2]/select'
        )
        .selectOption("1");
  
      await page
        .locator(
          '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[5]/div[3]/input'
        )
        .fill("5");
      
      //Save record
      await page.getByTitle('List View').click();
      await page.getByRole("button", { name: "Save and Close" }).click();
      //Click on Asset Tab
    await page.getByRole("link", { name: " Assets" }).click();
    //Search the Created Record
    // await page.pause();
    await page.click(".search-options");
    await page.click("#search-asset-id");
    await page.locator("#search-asset-id").fill(locString);
    await page.waitForTimeout(100);
    await page.getByRole("button", { name: "Search" }).click();
    
    //Select and Edit the searched record
    await page.getByRole('cell', { name: locString }).click();
    await page.getByTitle("Edit Asset").first().click();
    // await page.pause();
    //Maximize window
    await page.getByTitle("Maximize").click();
    //click on test specification tab
    await page.getByRole("link", { name: "Test Specifications" }).click();
    //  await page.waitForTimeout(100);
    //click on list view
    await page.getByTitle("List View").click();
   
    
    //click on record
    await page.locator('//*[@id="dialog-test-specifications-table"]/tbody[1]/tr[1]/td[1]/span').click();
    //click on edit record
    await page.getByTitle('Edit Test Specification').click();
    
    await page.locator('//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select').click();
    await page.locator('//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select').selectOption(randomSwitch);
    await page.locator('//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select').selectOption(randomTPAcc);

    await page.locator('//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select').selectOption(randomManual);
    //edit low range
    await page.locator('//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[2]/input').click();
    await page.locator('//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[2]/input').fill('20');
    //edit the high range
    await page.locator('//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[3]/input').click();
    await page.locator('//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[3]/input').fill('100');
    await page.getByTitle("List View").click();
    await page.locator('//*[@id="dialog-test-specifications-table"]/tbody[1]/tr[1]/td[1]/span').click();
    await page.getByTitle('Delete Test Specification').click();

    await page.getByRole('button', { name: 'Delete' }).click();
 
    await page.locator('#dialog-test-specification-list-add-button').click();

    await page
      .locator(
        '//*[@id="tab-asset-test-specifications"]/div[2]/div[2]/div[5]/div[1]/div[2]/input'
      )
      .fill(randomID);
   await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[1]/div[3]/select'
      ).selectOption('1');
      await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[2]/input'
      )
      .click();

    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[2]/input'
      )
      .fill("10");
    //Fill High Range
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[3]/input'
      )
      .click();
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[3]/input'
      )
      .fill("50");
    // await page.pause();
    //select Resolution
      await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[4]/select'
      )
      .selectOption("2");

    //Select Unit nm
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[5]/div[1]/div[1]/input'
      )
      .fill("nm");
    // await page.pause();
   
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[49]'
      )
      .click();
 //Select Tolerance
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[2]/div[2]/select'
      )
      .selectOption("2");
   //Fill Tolerance
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[2]/div[3]/input'
      )
      .click();
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[2]/div[3]/input'
      )
      .fill("5");
  //  await page.pause();
    await page.getByTitle("List View").click();
    await page.getByRole("link", { name: "Attachments" }).click();
    await page.getByTitle("Attach File").click();  
    const filepath0 = "./fixture/file/AssetsImport.xlsx";  
    await page.setInputFiles("#selected-file", filepath0);
    await page.getByRole("button", { name: "Upload" }).click();
    await page.getByRole('link', { name: 'Details' }).click();
    // await delay(1000);
    await page.getByRole("button", { name: "Save and Close" }).click();
    // Sign Out from Application
    
    await page.locator(".avatar-initials").click();

    await page.getByText("Sign Out").click();
  
    });
  });