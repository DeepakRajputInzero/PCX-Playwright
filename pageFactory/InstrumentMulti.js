import { test, expect } from "@playwright/test";
exports.InstrumentMulti = class InstrumentMulti{

    constructor(page){
        this.page = page
        this.assetId = page.locator("#dialog-asset-id");
        this.password_textbox = page.locator("input[name='Password']");
        this.login_button = page.getByRole("button", { name: "Sign in" });
    }

    

    async detailsPage() {
         //Random Number Genrater
    var minNumber = 40;
    var maxNumber = 10000;
    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
        let locString = "Instrument-Id-00" + randomNumber;
        //random value input in Asset ID
        await page.locator(this.assetId).click();
        await page.locator(this.assetId).fill(locString);
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
    }
    
    // async login(username, password){
    //     await this.username_textbox.fill(username);
    //     await this.password_textbox.fill(password);
    //     await this.login_button.click();
    // }
    
}