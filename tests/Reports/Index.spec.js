import { test, expect } from "@playwright/test";
import { assets } from "../../pages/assets";

test.describe("Create Index record", () =>{

    test.beforeEach(async({page}) => {
        
        //Application URL
        await page.goto("https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F")
    });
    test.afterEach(async({page})=> {
        await page.close();
        
      
    });

    test("Create Index record", async({page})=>{
        const login = new assets(page);
        expect(page.url()).toBe("https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F");
        await expect(page).toHaveTitle('PCX - Sign In');
        await login.login("deepakr@inzerotech.com", "Deepak@605");
        //After Login Check Url
        expect(page.url()).toBe("https://pcxstaging.primetechpa.com/Dashboards");
        await expect(page.locator(".selected-filter-name")).toHaveText('Dashboard');
        await page.locator("//span[normalize-space()='Reports']").click();
        await page.locator("//span[normalize-space()='Index']").click();
        await expect(page.locator(".selected-filter-name")).toHaveText("Reports");
        await page.locator('//*[@id="manufacturers-table"]/tbody/tr[1]/td[2]/a').click();
        await page.locator("//b[normalize-space()='Run Report']").click();
        await page.waitForTimeout(5000);
    
       expect(page.url()).toContain("https://pcxstaging.primetechpa.com/Reports/ItemsDue");
       
        await page.bringToFront();
        // await page.pause();
        //Fill Page Details
    //Random Number Genrater
    var minNumber = 40;
    var maxNumber = 10000;
    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    let locString = "Instrument-Id-00" + randomNumber;
    let locString1 = "Instrument-Id-00" + randomNumber;
        await page.locator("//span[normalize-space()='Calibration Certificate']").click();
        await page.locator("//input[@id='Assets']").click();
        await page.locator("//input[@id='Assets']").fill(locString);
        await page.locator("//b[normalize-space()='Run Report']").click();
        await page.waitForTimeout(5000);
        expect(page.url()).toContain("https://pcxstaging.primetechpa.com/Reports/CalibrationCertificate");
       
        await page.bringToFront();
        await page.locator("//span[normalize-space()='Results Trend']").click();
        await page.locator("//input[@id='Assets']").click();
        await page.locator("//input[@id='Assets']").fill(locString1);
        await page.locator("//b[normalize-space()='Run Report']").click();
        // await page.on("dialog", (dialog)=>{
        //     console.log('Message: '+ dialog.message());
        //     dialog.accept();
        // })
        await page.locator("//button[@type='button']").click();
        await page.locator("//span[normalize-space()='Reverse Traceability']").click();
        await page.locator("//input[@id='TestStandards']").click();
        // await page.pause()
        await page.locator("//input[@id='TestStandards']").fill(locString);
        await page.locator("//b[normalize-space()='Run Report']").click();
        await page.waitForTimeout(4000);
        expect(page.url()).toContain("https://pcxstaging.primetechpa.com/Reports/ReverseTraceability");
        await page.bringToFront();
        await page.locator("//span[normalize-space()='Work History']").click();
        await page.locator("//input[@id='Assets']").click();
        await page.locator("//input[@id='Assets']").fill(locString1);
        await page.locator("//b[normalize-space()='Run Report']").click();
        await page.waitForTimeout(4000);
        expect(page.url()).toContain("https://pcxstaging.primetechpa.com/Reports/WorkHistory");
        await page.bringToFront();
        await page.locator("//span[normalize-space()='Reports']").click();
        // await page.locator("//div[@class='avatar-initials']", {waitForTimeout:1000}).click();
        // // await page.waitForTimeout(100);
        // await page.locator("//li[@data-pcx-action='user-sign-out']",{waitForTimeout:1000}).click();
        // // await page.waitForTimeout(1000)
        // expect(page.url()).toContain("https://pcxstaging.primetechpa.com/Identity/Login");
    })
});