import {test, expect} from "@playwright/test";
import { assets } from "../../../pages/assets";

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
        let locString = "Actions-Id-00" + randomNumber;
        expect(page.url()).toBe("https://pcxdev.primetechpa.com/Identity/Login?ReturnUrl=%2F");
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login("deepakr@inzerotech.com", "Deepak@605");
        //After Login Check Url
        expect(page.url()).toBe("https://pcxdev.primetechpa.com/Dashboards");
        
        await expect(page.locator(".selected-filter-name")).toHaveText('Dashboard');
        await page.waitForTimeout(1000);
        await page.locator("//span[normalize-space()='Administration']").click();
      
        await page.locator("//a[normalize-space()='Lists']", {waitForTimeout:1000}).click();
        await page.getByRole('link', { name: 'Actions' }, {waitForTimeout:1000}).click();
        
        expect(page.url()).toContain("https://pcxdev.primetechpa.com/Actions");
        await page.locator("//a[normalize-space()='Name']").click({waitForTimeout:1000});

        await page.locator("//span[normalize-space()='New']", {waitForTimeout:1000}).click();
        await page.locator("//input[@id='dialog-action-name']").click();
        await page.locator("//input[@id='dialog-action-name']").fill(locString);
        await page.locator("//input[@id='dialog-action-category-name']").click();
        await page.locator("//input[@id='dialog-action-category-name']").fill("Category-"+randomNumber);
        await page.locator("//button[@id='dialog-button-save-action']").click();

        await page.locator("//i[@class='search-options fas fa-caret-down']").click();
        // await page.locator("//i[@class='search-options fas fa-caret-down']").fill(locString);

        await page.locator("//div[@class='search-options-body']//div//div//input[@name='Name']").click();
        await page.locator("//div[@class='search-options-body']//div//div//input[@name='Name']").fill(locString);
        await page.locator("//button[@class='search-with-options search-button pcx-button button-primary']").click({waitForTimeout:1000});
        await page.waitForTimeout(1000);
        await page.getByRole("cell", { name: locString }).click();
        await page.locator("//i[@class='far fa-trash-alt icon-delete-items']").click();
        await page.locator("//button[normalize-space()='Delete']").click(); 
        // expect( page.locator("//h1[@class='selected-filter-name']")).toContain("Actions");       
        await page.locator("//span[normalize-space()='Dashboard']", {waitForTimeout:1000}).click();
    });
});