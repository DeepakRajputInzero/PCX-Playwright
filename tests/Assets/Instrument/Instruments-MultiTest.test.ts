import { test, expect } from "@playwright/test";
import loginPage  from '../../../pages/loginPage';
import InstrumentMulti from '../../../pages/InstrumentMulti';


const data ={
  assetId: "#dialog-asset-id",
  newButton: "//span[normalize-space()='New']",
  maxWindow: "//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]",
  instrumentBtn: "//li[@data-pcx-action='new-instrument']"
}

  test("Create New Instrument record- Manual Test", async ({ page }) => {
    let login = new loginPage(page);
    let instruments = new InstrumentMulti(page);
    await login.navigateUrl();
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.loginApp("deepakr@inzerotech.com", "Deepak@605");
    //Login to Application  
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://pcxstaging.primetechpa.com/Dashboards');
    await expect(page).toHaveTitle("PCX - Dashboard")
    await expect(page.locator(".selected-filter-name")).toHaveText('Dashboard');
    //Click on New
    await instruments.clickOnNewBtn();
    //Click on Instrument link
    await instruments.clickOnInstrument();

    //Maximize window
    await instruments.maximizeWindow();
    //Fill Page Details 
    await instruments.fillManualAssetId();        
    // Fill Description
    await instruments.fillInstrumentsName("Instruments Calibration");
    //Fill Manufacturer
    await instruments.fillManufectureName("Fluke");  
    
    // Select Physical Location
    await instruments.selectPhysicalLoc("51");
   
    // Fill Model Number   
    await instruments.fillModelNumber("M-4258");
    // await page.waitForLoadState();
    //Select functional Location    
    await instruments.functionalLoc("Noise Room");
    //Fill Serial Number
    await instruments.fillSerialNum("SN-58");
   
    //Select Department ID
    await instruments.selectDepartment("34");
    
    await instruments.classificationVal();



   await instruments.frequencyVal("3");

    // Date pic
    await instruments.datePic();
    //Fill Remarks
    await instruments.remarks("Calibration on Instrument")

    //Click on Test Specification Tab
    await instruments.clickOnTestSpecification();
    
    await page.waitForLoadState();
    //Fill Title
    await instruments
      .fillTitle(instruments.randomManual);
    //Select type as Manual Test
    await instruments.selectTypeTest("1");

    //Fill Low Range
    await instruments.fillLowRange("10");

    
    //Fill High Range
    await instruments.fillHighRange("50");
    //Select Resolution
    await instruments.selectResolution("2");

    //Select Unit nm
    await instruments.selectUnit("nm");
    // await page.pause();
    //Select Tolerance Type
    
    await instruments.selectTolrence("2")
    //Fill Tolerance Field
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input'
      )
      .click();
    await instruments.fillTolrence("5");

    // expect(await page.screenshot()).toMatchSnapshot("Instruments.png");
    //Add New Switch Test
  //   await page.getByTitle("Add Test Specification").nth(3).click();
  //   await page.waitForLoadState();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[1]/div[2]/input[1]'
  //     )
  //     .fill(instruments.randomSwitch);

  //   //Select type as Manual Test
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[1]/div[3]/select'
  //     )
  //     .selectOption("2");
  //   //Select Trip Detection Method
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[1]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[1]/select'
  //     )
  //     .selectOption("3");
  //   //Set Point Tolerance
  //   // expect(await page.locator('//div[@class="dialog-test-specification-container "]/div[2]/div[5]/div[1]').textContent()).toEqual("Tolerance")
   
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[2]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[1]/div[2]/input'
  //     )
  //     .fill("5");
  //   //Fill Low Range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[2]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[2]/input'
  //     )
  //     .fill("10");
  //   //Fill High Range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[3]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[3]/input'
  //     )
  //     .fill("50");
  //   //Select Resolution
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[4]/select'
  //     )
  //     .selectOption("2");

  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[5]/div[1]/div[1]/input'
  //     )
  //     .fill("nm");
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[3]/div[5]/div[1]/div[2]/div[1]/div[49]'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[5]/div[2]/table[1]/tbody/tr[1]/td[2]/div[1]/input'
  //     )
  //     .fill("2");
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[5]/div[2]/table[1]/tbody/tr[1]/td[3]/select'
  //     )
  //     .selectOption("1");
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[3]/div[2]/div[5]/div[2]/table[1]/tbody/tr[1]/td[4]/select'
  //     )
  //     .selectOption("2");
  //   await page.pause()
  //   //Add New Test Point Accuracy
  //   await page.locator("//i[@id='dialog-test-specification-details-list-button']").click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specification-list"]/div[1]/div[1]/div[2]/i[1]'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[1]/div[2]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[1]/div[2]/input'
  //     )
  //     .fill(instruments.randomTPAcc);

  //   //Select type as Test Point Accuracy
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[1]/div[3]/select'
  //     )
  //     .selectOption("3");
  //   //Fill Low Range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[1]/div[1]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[1]/div[1]/select'
  //     )
  //     .selectOption("3");
  //   //Fill Low Range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[2]/input'
  //     )
  //     .click();

  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[2]/input'
  //     )
  //     .fill("10");

  //   //Fill High Range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[3]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[3]/input'
  //     )
  //     .fill("50");
  //   //
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[4]/select'
  //     )
  //     .selectOption("2");

  //   // Select Unit
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[5]/div/div/input'
  //     )
  //     .fill("nm");
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[3]/div[5]/div/div[2]/div[1]/div[49]'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[5]/div[2]/select'
  //     )
  //     .selectOption("1");

  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[4]/div[2]/div[5]/div[3]/input'
  //     )
  //     .fill("5");
  //   // await page.pause();
  //   //Save record
  //   await page.locator("//a[normalize-space()='Uncertainty']").click();
  //   // await page.pause()
  //   await page.waitForTimeout(1000);
  //   await page.locator("//i[@title='Add Component']").click();
  //   //  await page.waitForTimeout(1000);
  //   // await page.getByTitle('Add Component').click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[1]/div[1]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[1]/div[1]/input'
  //     )
  //     .fill("Com-" + instruments.randomNumber);
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[3]/div[1]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[3]/div[1]/input'
  //     )
  //     .fill("2");
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[4]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[4]/select'
  //     )
  //     .selectOption("10");
  //   // await page.locator('//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[7]/input').click();
  //   // await page.locator('//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[7]/input').fill('1');
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[8]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[8]/select'
  //     )
  //     .selectOption("49");
  //   await page.getByTitle("Add Component").click();
  //   //  await page.waitForTimeout(1000);
  //   // await page.getByTitle('Add Component').click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[1]/div[1]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[1]/div[1]/input'
  //     )
  //     .fill("Com1-" + instruments.randomNumber);
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[3]/div[1]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[3]/div[1]/input'
  //     )
  //     .fill("1");
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[4]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[4]/select'
  //     )
  //     .selectOption("10");
  //   // await page.locator('//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[7]/input').click();
  //   // await page.locator('//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[2]/td[7]/input').fill('1');
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[8]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]/td[8]/select'
  //     )
  //     .selectOption("48");
  //   // await page.getByRole("button", { name: "Save and Close" }).click();
  //   await page.getByRole("button", { name: "Save and Close" }).click();

  //   //Click on Asset Tab
  //   await page.getByRole("link", { name: " Assets" }).click();
  //   expect(await page.locator("#list-view-title")).toContainText("Assets");
  //   //Search the Created Record
  //   // await page.pause();
  //   await page.click(".search-options");
  //   await page.click("#search-asset-id");
  //   await page.locator("#search-asset-id").fill(instruments.locString);
  //   // await page.waitForTimeout(100);
  //   await page.getByRole("button", { name: "Search" }).click();
  //   expect(await page.locator("#list-view-title")).toContainText("Assets");
  //   //Select and Edit the searched record
  //   // await page.getByRole("cell", { name: locString }).click();
  //   await page.getByTitle("Edit Asset").first().click();
  //   // await page.pause();
  //   //Maximize window
  //   await page.getByTitle("Maximize").click();
  //   //click on test specification tab
  //   await page.getByRole("link", { name: "Test Specifications" }).click();
  //   //  await page.waitForTimeout(100);
  //   //click on list view
  //   await page.getByTitle("List View").click();

  //   //click on record
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-table"]/tbody[1]/tr[1]/td[1]/span'
  //     )
  //     .click();
  //   //click on edit record
  //   await page
  //     .getByTitle("Edit Test Specification")
  //     .click();

  //   await page
  //     .locator(
  //       '//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select'
  //     )
  //     .selectOption(instruments.randomSwitch);
  //   await page
  //     .locator(
  //       '//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select'
  //     )
  //     .selectOption(instruments.randomTPAcc);

  //   await page
  //     .locator(
  //       '//*[@id="tab-asset-test-specifications"]/div[2]/div[1]/div/div[1]/select'
  //     )
  //     .selectOption(instruments.randomManual);
  //   //edit low range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[2]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[2]/input'
  //     )
  //     .fill("20");
  //   //edit the high range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[3]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[1]/div[2]/div[1]/div[3]/input'
  //     )
  //     .fill("100");
  //   await page.getByTitle("List View").click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-table"]/tbody[1]/tr[1]/td[1]/span'
  //     )
  //     .click();
  //   await page.getByTitle("Delete Test Specification").click();

  //   await page.getByRole("button", { name: "Delete" }).click();

  //   await page.locator("#dialog-test-specification-list-add-button").click();

  //   await page
  //     .locator(
  //       '//*[@id="tab-asset-test-specifications"]/div[2]/div[2]/div[5]/div[1]/div[2]/input'
  //     )
  //     .fill(instruments.randomID);
  //   await page
  //     .locator(
  //       '//*[@class="dialog-test-specification-container"]/div[1]/div[3]/select'
  //     )
  //     .selectOption("1");
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[2]/input'
  //     )
  //     .click();

  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[2]/input'
  //     )
  //     .fill("10");
  //   //Fill High Range
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[3]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[3]/input'
  //     )
  //     .fill("50");
  //   // await page.pause();
  //   //select Resolution
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[4]/select'
  //     )
  //     .selectOption("2");

  //   //Select Unit nm
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[5]/div[1]/div[1]/input'
  //     )
  //     .fill("nm");

  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[1]/div[5]/div[1]/div[2]/div[1]/div[49]'
  //     )
  //     .click();
  //   //Select Tolerance
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[2]/div[2]/select'
  //     )
  //     .selectOption("2");
  //   //Fill Tolerance
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[2]/div[3]/input'
  //     )
  //     .click();
  //   await page
  //     .locator(
  //       '//*[@id="dialog-test-specifications-container"]/div[5]/div[2]/div[2]/div[3]/input'
  //     )
  //     .fill("5");

  //   await page.getByTitle("List View").click();
  //   await expect(page.locator("a[href='#tab-asset-attachments']")).toContainText('Attachments');
  //   await page.getByRole("link", { name: "Attachments" }).click();
  //   await page.getByTitle("Attach File").click();
  //   const filepath0 = "./fixture/file/AssetsImport.xlsx";
  //   await page.setInputFiles("#selected-file", filepath0);
  //   await page.getByRole("button", { name: "Upload" }).click();
  //   //Add Uncertainty
  //   await page.locator("//a[normalize-space()='Uncertainty']").click();

  //   expect(await page.locator("div[id='tab-asset-uncertainty'] div[class='form-group-header'] div:nth-child(1)")).toHaveText('Components');

  //   await page
  //     .locator(
  //       '//*[@class="pcx-tab-content"]/div[4]/div[1]/div[2]/table[1]/tbody/tr[3]'
  //     )
  //     .click();
  //   await page.getByTitle("Delete Component").click();
  //   await page.getByRole("button", { name: "Delete" }).click();
  //   await page
  //     .getByRole("button", { name: "Save and Close" })
  //     .click();
  //   // await page.pause()
  //   await expect(page).toHaveURL('https://pcxstaging.primetechpa.com/Assets');
    
  //   page.on('dialog', async dialog => {
  //     expect(await page.locator("#list-view-title")).toContainText("Assets");
  //   // await page.getByRole("cell", { name: locString }).click({timeout:100});
  //   await page.getByTitle('Delete Asset').click();
  //     // Get the message of the dialog
  //     console.log(dialog.message());

  //     // Accept the dialog
  //     await dialog.accept();
  //   });
  //   // await page.getByRole('button', { name: 'Delete' }).click();
  //   await expect(page).toHaveURL('https://pcxstaging.primetechpa.com/Assets');
  //   expect(await page.getByRole('heading', { name: 'Assets(1)' }).getByText('Assets').textContent)
    
  //   // await page
  //   //   .locator('//*[@class="pcx-dropdown-menu-container"]/div[1]/div[1]/div[1]', {timeout: 10000})
  //   //   .click();
  //   // await page.waitForNavigation({ timeout: 2000 });
  //   // // Sign Out from Application
  //   // // await page.waitForTimeout(3000);
  //   // await page.locator('li[data-pcx-action="user-sign-out"]').click();
  //   // await page.waitForTimeout(3000);
  //   // await expect(page).toHaveURL('https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F');
    
  });

