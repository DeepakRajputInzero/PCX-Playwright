import {test, expect} from "@playwright/test";
import { assets } from "../../pages/assets";
test.describe("Test Aministrator Calibrated Template records", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://pcxdev.primetechpa.com/Identity/Login?ReturnUrl=%2F");
    });

    test.afterEach(async({page})=> {
        await page.close();        
      
    });
    test("Test Calibrator Template record", async({page})=>{
        const login = new assets(page);
        //Random Number Genrater
        var minNumber = 40;
        var maxNumber = 10000;
        var randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
        await page.waitForLoadState();
        let locString = "Calibrator-Id-00" + randomNumber;
        expect(page.url()).toBe("https://pcxdev.primetechpa.com/Identity/Login?ReturnUrl=%2F");
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login("deepakr@inzerotech.com", "Deepak@605");
        //After Login Check Url
        expect(page.url()).toBe("https://pcxdev.primetechpa.com/Dashboards");
    
        await expect(page.locator(".selected-filter-name")).toHaveText('Dashboard');
        await page.waitForTimeout(1000);
        await page.locator("//span[normalize-space()='Administration']").click();
      
        await page.locator("//a[normalize-space()='Calibrator Templates']", {waitForTimeout:1000}).click();
        await page.locator("//a[normalize-space()='Name']").click();
        expect(page.url()).toContain("https://pcxdev.primetechpa.com/CalibratorTemplates");
        await page.locator("//span[normalize-space()='New']").click({waitForTimeout:500});
        await page.locator("//input[@id='dialog-add-calibrator-profile-name']").click();
        await page.locator("//input[@id='dialog-add-calibrator-profile-name']").fill(locString);
        await page.locator("//select[@id='dialog-add-loop-power']").click();
        await page.locator("//select[@id='dialog-add-loop-power']").selectOption("2");
        await page.locator("//select[@id='dialog-add-source-mode']").click({waitForTimeout:500});
        await page.locator("//select[@id='dialog-add-source-mode']").selectOption("2");
        await page.locator("//select[@id='dialog-add-measure-mode']").click();
        await page.locator("//select[@id='dialog-add-measure-mode']").selectOption("1");
        await page.locator("//select[@id='dialog-add-source-custom-units']").click();
        await page.locator("//select[@id='dialog-add-source-custom-units']").selectOption("8");
        await page.locator("//select[@id='dialog-add-measure-custom-units']").click();
        await page.locator("//select[@id='dialog-add-measure-custom-units']").selectOption("8");
        await page.locator("//input[@id='dialog-add-custom-source-mode']").check();
        await page.locator("//input[@id='SourceCustomLow']").click();
        await page.locator("//input[@id='SourceCustomLow']").fill("10");
        await page.locator("//input[@id='SourceCustomHigh']").click();
        await page.locator("//input[@id='SourceCustomHigh']").fill("50");
        await page.locator("//input[@id='dialog-add-custom-measure-mode']").check();
        await page.locator("//input[@id='MeasureCustomLow']").click();
        await page.locator("//input[@id='MeasureCustomLow']").fill("10");
        await page.locator("//input[@id='MeasureCustomHigh']").click();
        await page.locator("//input[@id='MeasureCustomHigh']").fill("50");
        await page.locator("//button[@id='dialog-button-save-calibrator-profile']").click();
        await page.waitForLoadState();
        await page.locator("//input[@placeholder='Search Calibrator Templates']").click();
        await page.locator("//input[@placeholder='Search Calibrator Templates']").fill(locString);
        await page.keyboard.press('Enter');
        await page.waitForLoadState();
        await page.getByRole("cell", { name: locString }).click();
        await page.locator("//i[@class='far fa-trash-alt icon-delete-items']").click();
        await page.locator("//button[normalize-space()='Delete']").click();
        // await page.pause();



        // await page.locator("//button[@id='dialog-button-save-calibrator-profile']").click();
        // await page.locator("//input[@placeholder='Search Calibrator Templates']").click();
        // await page.locator("//input[@placeholder='Search Calibrator Templates']").fill("Test Calbrator");

        
        
        

        })
})