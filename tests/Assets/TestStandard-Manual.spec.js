import { test, expect } from "@playwright/test";
import { assets } from "../../pages/assets.js";

test.describe("Create New Test Standard record", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("Create New Test Standard record- Manual Test", async ({ page }) => {
    const login = new assets(page);
    //Login to Application
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.login("deepakr@inzerotech.com", "Deepak@605");

    //Click on New
    await page.getByRole("link", { name: " New" }).click();
    //Click on New Instrument
    await page.getByText("Test Standard").click();
    //Maximize window
    await page
      .locator("//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]")
      .click();
    //Fill Page Details
    var minNumber = 1000;
    var maxNumber = 40;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let locString = "Test Standard-Id-00" + randomNumber;
    //random value input in Asset ID
    await page.locator("#dialog-asset-id").click();
    await page.locator("#dialog-asset-id").fill(locString);
    await page.locator("#dialog-asset-name").click();
    await page.locator("#dialog-asset-name").fill("Instrument Calibration");
    await page.locator("#dialog-asset-manufacturer").click();
    await page.locator("#dialog-asset-manufacturer").fill("fluke");
    await page.locator("#ui-id-3").click();
    await page.locator("select[name='PhysicalLocationId']").selectOption("51");
    // await page.pause();
    await page.locator('input[name="ModelNumber"]').click();
    await page.locator('input[name="ModelNumber"]').fill("258");
    // await page.locator('input[name="FunctionalLocation"]').click();
    // await page.locator('input[name="FunctionalLocation"]').fill('Noise Room');
    await page.locator('input[name="SerialNumber"]').click();
    await page.locator('input[name="SerialNumber"]').fill("25886");

    await page.locator('select[name="DepartmentId"]').selectOption("34");
    await page.locator(".selectize-input").click();

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

    await page.locator("#dialog-asset-remarks").click();
    await page.locator("#dialog-asset-remarks").fill("Calibration");
    //Click on Test Standard Tab
    await page.getByRole("link", { name: "Test Specifications" }).click();

    let locString1 = "Test-Calibration-00" + randomNumber;
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

    await page.locator(".avatar-initials").click();
    await page.getByText("Sign Out").click();
  });
});
