import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets.js";

test.describe("Create New record and update", () => {
  test.beforeEach(async ({ page }) => {
    //Application Url
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Create Asset Record and update", async ({ page }) => {
    const login = new assets(page);
    //Login to Application
    expect(page.url()).toBe("https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F");
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.login("deepakr@inzerotech.com", "Deepak@605");
    //After Login Url
    expect(page.url()).toBe("https://pcxstaging.primetechpa.com/Dashboards");
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
    var minNumber = 100;
    var maxNumber = 40;
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
    let random = "Asset-Calibration-" + randomNumber;
    await page.getByText("Test Specifications").click();
    //Fill Title
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[1]/div[2]/input'
      )
      .fill(random);
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
    // await page.pause();
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
        ).click();
    await page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[2]/select'
      )
      .selectOption("2");
      //Fill Tolerance Field
    await page
      .locator('//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input')
      .click();
    await page
      .locator('//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input')
      .fill("5");
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
    await page.locator("div:nth-child(2) > i").first().click();
    await page.pause();
    //Maximize window
    await page.getByTitle("Maximize").click();

    // Random value input in Asset ID
    let locString2 = "Delete_Asset-Id-00" + randomNumber;
    await page.locator("#dialog-asset-id").click();
    await page.locator("#dialog-asset-id").fill(locString2);

    await page.getByText("Remarks").click();
    await page
      .locator("#dialog-asset-remarks")
      .fill("Updated Calibration Record");
    await page.getByRole("button", { name: "Save and Close" }).click();
    
    // await page.pause();
    await page.click(".search-options");
    await page.click("#search-asset-id");
    await page.locator("#search-asset-id").fill(locString2);
    await page.getByRole("button", { name: "Search" }).click();
    await page.waitForTimeout(1000);
    await page.click(
        "//body/div[1]/main/div/div[2]/div/div/div/div/div[2]/table/tbody/tr[1]/td[1]"
      );
   
    //Delete the Searched record from list
    await page.getByTitle('Delete Asset').click();
    await page.getByRole('button', { name: 'Delete' }).click();
    //Print Popup Content
    const errorMes = await page.getByText('Hmm... It looks like we can/t find any assets. Try using a different search term and also check for typos.').allTextContents();
    console.log("Error msg is:"+errorMes);
    await page.waitForTimeout(100);
    //Sign Out from Application
    await page.locator(".avatar-initials").click();
    await page
      .locator(
        "//ul[@class='pcx-dropdown-menu primary-nav-dropdown-menu user-dropdown-menu align-right']/li[4]"
      )
      .click();
    await page.waitForTimeout(100);
  });
});
