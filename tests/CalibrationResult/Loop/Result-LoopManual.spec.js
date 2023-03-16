import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets";

test.describe("Create New record and update Calibration Result_Manual Test", () => {
  test.beforeEach(async ({ page }) => {
    //Application Url
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Create Asset Record and update Calibration Result- Manual Test", async ({
    page,
  }) => {
    const login = new assets(page);
    const filepath0 = "./fixture/file/AssetsImport.xlsx";
    //Login to Application
    expect(page.url()).toBe(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.login("deepakr@inzerotech.com", "Deepak@605");
    //After Login Url
    expect(page.url()).toBe("https://pcxstaging.primetechpa.com/Dashboards");
    //Click on New
    await page.getByRole("link", { name: " New" }).click();
    //Click on Instrument link
    await page.getByText("Loop").click();
    //Maximize window
    await page
      .locator("//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]")
      .click();
    //Fill Page Details
    var minNumber = 20;
    var maxNumber = 1000;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let locString = "Loop-Manual-Id-00" + randomNumber;
    //random value input in Asset ID
    await page.locator("#dialog-asset-id").click();
    await page.locator("#dialog-asset-id").fill(locString);
    await page.locator("#dialog-asset-name").click();
    // await page.pause();
    await page.locator("#dialog-asset-name").fill("Instrument Calibration");

    await page.locator("select[name='PhysicalLocationId']").selectOption("51");
    // Select Department
    await page.locator('select[name="DepartmentId"]').selectOption("34");
    await page.locator(".selectize-input").click();
    //Select Classification
    await page.click(
      '//*[@id="tab-asset-details"]/div[2]/div[2]/div[4]/div/div[1]'
    );
    await page.getByText("Classification 1").click();
    await page.getByText("Critical", { exact: true }).click();
    //Fill Functional Location
    await page.locator('input[name="FunctionalLocation"]').click();
    await page.locator('input[name="FunctionalLocation"]').fill("Noise Room");
    await page.click('//*[@id="tab-asset-details"]/div[3]/div[3]/select');
    await page
      .locator('//*[@id="tab-asset-details"]/div[3]/div[3]/select')
      .selectOption("3");

    // Date pic
    await page.click('//*[@id="tab-asset-details"]/div[3]/div[2]/div/input');
    const mmYY = page.locator(
      '//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a'
    );
    const prev = page.locator(
      '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[1]'
    );
    const next = page.locator('//*[@id="ui-datepicker-div"]/div/a[2]');
    await next.click();
    await page.click('//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]');
    //Fill Remarks
    await page.getByText("Remarks").click();
    await page.locator("#dialog-asset-remarks").fill("Calibration");
    //Click on Components Tab
    await page.getByRole("listitem").filter({ hasText: "Components" }).click();
    await page.click('//*[@id="loop-component-add-button"]');
    await page.click('//*[@id="createAttachment"]/form/div/div/div/div[1]');
    //  await page.pause();
    await page.getByText("Absolute Pressure Gauge").click();
    await page.getByText("369").click();
    await page.getByText("Dryer").click();
    await page.click('//*[@id="loop-components-instruments-select-button"]');
    await page
      .getByRole("listitem")
      .filter({ hasText: "Test Specifications" })
      .click();
    let locString1 = "Loop-Calibration-00" + randomNumber;
    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill(locString1);
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
    await page.getByTitle("Start Calibration").first().click();

    //Maximize window
    await page.getByTitle("Maximize").click();
    await page.locator(".selectize-input").first().click();
    await page.getByText("Adjusted").click();
    await page.getByText("Set Span").click();
    await page.getByText("Set Zero").click();

    await page.locator('//*[@id="result-status-select"]').click();
    await page.locator('//*[@id="result-status-select"]').selectOption("2");
    await page.locator('input[name="Temperature"]').click();

    await page.locator('input[name="Temperature"]').fill("24");

    await page
      .locator('//*[@id="tab-result-details"]/div[5]/div[3]/div/div[1]')
      .click();
    await page.getByText("°C").nth(3).click();
    await page.locator('input[name="Humidity"]').click();
    await page.locator('input[name="Humidity"]').fill("24");
    await page
      .locator('//*[@id="tab-result-details"]/div[5]/div[5]/div/div[1]')
      .click();
    await page.getByText("nm").nth(2).click();

    await page
      .locator(
        '//*[@id="dialog-new-result-performed-by-table"]/tbody/tr[2]/td[2]/input[1]'
      )
      .click();
    await page
      .locator(
        '//*[@id="dialog-new-result-performed-by-table"]/tbody/tr[2]/td[2]/input[1]'
      )
      .fill("2");
    await page.getByRole("button", { name: "" }).click();
    await page.getByText("Save", { exact: true }).click();

    await page.getByRole("link", { name: "Test Standards" }).click();
    await page.locator('//*[@id="test-standards-add-button"]').click();
    // await page.pause();
    await page
      .locator('//*[@id="test-standards-assignment-table"]/tbody/tr[1]/td[1]')
      .click();
    await page
      .locator('//*[@id="test-standards-assignment-table"]/tbody/tr[1]/td[2]')
      .click();
    
    await page.getByRole("button", { name: "Select" }).click();

    //Click on Attachment Tab
    await page.getByRole("link", { name: "Attachments" }).click();
    await page.getByTitle("Attach File").click();

    // await page.getByText('Import Assets').click();
    await page.setInputFiles("#selected-file", filepath0);
    await page.getByRole("button", { name: "Upload" }).click();
    await page.getByRole("link", { name: "Remarks" }).click();
    await page.locator("#dialog-result-remarks").fill("Calibration Notes");
    await page.getByRole("button", { name: "Save and Close" }).click();
    await page.getByRole("link", { name: " Results" }).click();
    // await page.pause();
    await page.locator(".search-options").click();
    await page.locator("#search-asset-id").click();
    await page.locator("#search-asset-id").fill(locString);
    await page.getByRole("button", { name: "Search" }).click();
    await page.click(
      "//body/div[1]/main/div/div[2]/div/div/div/div/div[2]/table/tbody/tr[1]/td[1]"
    );

    await page.getByTitle("Edit Result").first().click();
    //Maximize window
    await page.getByTitle("Maximize").click();
    await page.locator("#result-status-select").click();
    await page.getByRole("link", { name: "Test Activities" }).click();
    // await page.locator("#dialog-result-test-activity-remarks").click();
    // await page
    //   .locator("#dialog-result-test-activity-remarks")
    //   .fill("Calibration done");
    await page
      .locator(
        'select[name="TestActivity\\.ManualPassFailResults\\.AsFoundResultId"]'
      )
      .selectOption("2");
    await page.locator('//*[@id="result-status-select"]').selectOption("5");
    await page
      .locator(
        'select[name="TestActivity\\.ManualPassFailResults\\.AsLeftResultId"]'
      )
      .selectOption("2");
    
   
    await page.getByRole("button", { name: "" }).click();  
    await page.getByText("Save", { exact: true }).click();
    
    await page.getByTitle('Close').nth(1).click();
    
    // const errorMes = await page.getByText('Result updated successfully.').textContent;
    // console.log("Error msg is:" + errorMes);
  
    // Sign Out from Application
    await page.locator(".avatar-initials").click();
    await page.getByText("Sign Out").click();
    await page.waitForTimeout(100);
  });
});
