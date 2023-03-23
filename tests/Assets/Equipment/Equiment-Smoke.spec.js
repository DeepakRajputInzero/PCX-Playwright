import { test, expect } from "@playwright/test";
import { assets } from "../../../pages/assets.js";

test.describe("Create New Multi Test Spec Equipment record", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("Create Multi Test Spec Equipment record", async ({ page }) => {
    const login = new assets(page);
    //Login to Application
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.login("deepakr@inzerotech.com", "Deepak@605");

    //Click on New
    await page.getByRole("link", { name: " New" }).click();
    //Click on New Instrument
    await page.getByText("Equipment").click();
    //Maximize window
    await page
      .locator("//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/i[1]")
      .click();
    //Fill Page Details
    var minNumber = 40;
    var maxNumber = 10000;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let locString = "Equiment-MutliSpec-Id-00" + randomNumber;
    //random value input in Asset ID
    await page.locator("#dialog-asset-id").click();
    await page.locator("#dialog-asset-id").fill(locString);
    await page.locator("#dialog-asset-name").click();
    // await page.pause();
    await page.locator("#dialog-asset-name").fill("Instrument Calibration");
     //Fill Manufacturer
    await page.locator("#dialog-asset-manufacturer").click();   
    await page.locator("#dialog-asset-manufacturer").fill("fluke");
    await page.locator("#ui-id-3").click();
    //Physical Location
    await page.locator("select[name='PhysicalLocationId']").selectOption("51");
    // Select Department
    
    await page.locator('input[name="ModelNumber"]').fill('Mod-'+randomNumber);
    await page.locator('select[name="DepartmentId"]').selectOption("34");
    await page.locator(".selectize-input").click();
    //Select Classification
    await page.click(
      '//*[@id="tab-asset-details"]/div[2]/div[3]/div[4]/div/div/input'
    );
    await page.locator('//*[@id="tab-asset-details"]/div[2]/div[3]/div[4]/div/div/input').fill('Classification');
    await page.getByText("Classification 1").click();
    await page.getByText("Critical", { exact: true }).click();
   
    //Fill Functional Location
    await page.locator('input[name="FunctionalLocation"]').click();
    await page.locator('input[name="FunctionalLocation"]').fill("Noise Room");
   
    await page.locator('input[name="SerialNumber"]').fill('SN-'+randomNumber);
    
    //Fill Remarks
    await page.getByText("Remarks").click();
    await page.locator("#dialog-asset-remarks").fill("Multi Test spec Calibration");
    
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
    await page.getByRole('cell', { name: locString }).click();
    await page.getByTitle('Edit Asset').first().click();

    //Maximize window
    await page.getByTitle("Maximize").click();      

    //Click on Attachment Tab
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
