import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets";

test.describe("Create New Assets record", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("Create New Instrument record- Manual Test", async ({ page }) => {
    const login = new assets(page);
    //Login to Application
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.login("deepakr@inzerotech.com", "Deepak@605");

    //Click on New
    await page.getByRole("link", { name: " New" }).click();
    //Click on Instrument link
    await page.getByText("Instrument").click();

    //Maximize window
    await page
      .locator("//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]")
      .click();
    //Fill Page Details
    //Random Number Genrater
    var minNumber = 40;
    var maxNumber = 1000;
    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let locString = "Instrument-Id-00" + randomNumber;
    //random value input in Asset ID
    await page.locator("#dialog-asset-id").click();
    await page.locator("#dialog-asset-id").fill(locString);
    await page.locator("#dialog-asset-name").click();
    // Fill Description
    await page.locator("#dialog-asset-name").fill("Instrument Calibration");
    await page.locator("#dialog-asset-manufacturer").click();
    //Fill Manufacturer
    await page.locator("#dialog-asset-manufacturer").fill("fluke");
    await page.locator("#ui-id-3").click();
    // Select Physical Location
    await page.locator("select[name='PhysicalLocationId']").selectOption("51");
    // Fill Model Number
    await page.locator('input[name="ModelNumber"]').click();
    await page.locator('input[name="ModelNumber"]').fill("258");
    //Select functional Location
    await page.locator('input[name="FunctionalLocation"]').click();
    await page.locator('input[name="FunctionalLocation"]').fill("Noise Room");
    //Fill Serial Number
    await page.locator('input[name="SerialNumber"]').click();
    await page.locator('input[name="SerialNumber"]').fill("25886");
    //Select Department ID
    await page.locator('select[name="DepartmentId"]').selectOption("34");
    await page.locator(".selectize-input").click();
    // Select Classification multiple
    await page.getByText("Classification 1").click();
    await page.getByText("Critical", { exact: true }).click();

    await page
      .locator('//*[@id="tab-asset-details"]/div[3]/div[3]/select')
      .selectOption("3");

    // Date pic
    await page.click(
      '//*[@id="tab-asset-details"][@id="tab-asset-details"]/div[3]/div[2]/div/span/i'
    );
    const mmYY = page.locator(
      '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/div'
    );
    const prev = page.locator(
      '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[1]'
    );
    const next = page.locator(
      '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[2]'
    );
    await next.click();
    await page.click(
      '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/table/tbody/tr[4]/td[6]/a'
    );
    //Fill Remarks
    await page.locator("#dialog-asset-remarks").click();
    await page.locator("#dialog-asset-remarks").fill("Calibration");

    //Click on Test Standard Tab
    await page
      .getByRole("listitem")
      .filter({ hasText: "Test Specifications" })
      .click();
    //Genrate Asset Id
    let randomManual = "TestSpec-Manual-00" + randomNumber;
    let randomSwitch = "TestSpec-Switch-00" + randomNumber;
    let randomTPAcc = "TestSpec-TPAcc-00" + randomNumber;
    let randomID = "Update-ID-00" + randomNumber;
    // await page.getByText("Test Specifications").click();
    //Fill Title
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[1]/div[2]/input'
      )
      .fill(randomManual);
    //Select type as Manual Test
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[1]/div[3]/select'
      )
      .selectOption("1");
      
    //Fill Low Range
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
    // await page.pause();
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
    //Add New Switch Test
    await page.getByTitle("Add Test Specification").nth(3).click();
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[3]/div[1]/div[2]/input[1]'
      )
      .fill(randomSwitch);

    //Select type as Manual Test
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

    // await page.pause();
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
    await page.locator("#dialog-test-specification-details-add-button").click();
    await page.getByRole("textbox").fill(randomTPAcc);

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
    // await page.pause();
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
    // await page.pause();
    //Save record

    await page.getByRole("button", { name: "Save and Close" }).click();

    //Click on Asset Tab
    await page.getByRole("link", { name: " Assets" }).click();
    //Search the Created Record
    await page.click(".search-options");
    await page.click("#search-asset-id");
    await page.locator("#search-asset-id").fill(locString);
    await page.getByRole("button", { name: "Search" }).click();
    await page.waitForTimeout(1000);
    //Select and Edit the searched record
    await page.click(
      "//body/div[1]/main/div/div[2]/div/div/div/div/div[2]/table/tbody/tr[1]/td"
    );
    await page.getByTitle("Edit Asset").first().click();
    
    //Maximize window
    await page.getByTitle("Maximize").click();
    //click on test specification tab
    await page.getByRole("link", { name: "Test Specifications" }).click();
    //click on list view
    await page.getByTitle("List View").click();
    await page.waitForTimeout(100);
    
    //click on record
    await page.locator('//*[@id="dialog-test-specifications-table"]/tbody[1]/tr[1]/td[1]/span').click();
    //click on edit record
    await page.getByTitle('Edit Test Specification').click();
    // await page.locator('#dialog-test-specification-selector').fill(randomID);
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
    
    await page.getByRole("link", { name: "Attachments" }).click();
    await page.getByTitle("Attach File").click();  
    const filepath0 = "./fixture/file/AssetsImport.xlsx";  
    await page.setInputFiles("#selected-file", filepath0);
    await page.getByRole("button", { name: "Upload" }).click();
    await page.getByRole("button", { name: "Save and Close" }).click();
    // Sign Out from Application
    await page.waitForTimeout(100);
    await page.locator(".avatar-initials").click();

    await page.getByText("Sign Out").click();
  });
});
