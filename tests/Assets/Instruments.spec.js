import { test, expect } from "@playwright/test";
import { assets } from "../../pages/assets.js";

test.describe("Create New Assets record", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(
        "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
      );
    });

    test.afterEach(async ({page})=>{
        await page.close();
      });
    test("Create New Instrument record- Manual Test", async ({ page }) => {
        const login = new assets(page);
        //Login to Application
        await login.login('deepakr@inzerotech.com', 'Deepak@605');
        await page.pause();
        //Click on New 
        await page.getByRole('link', { name: ' New' }).click();
        //Click on New Instrument
        await page.getByText('Instrument').click();
        //Fill Page Details
        await page.locator('#dialog-asset-id').click();
        await page.locator('#dialog-asset-id').fill('ASSETS-01');
        await page.locator('#dialog-asset-name').click();
        await page.locator('#dialog-asset-name').fill('Assets');
        await page.locator('#dialog-asset-manufacturer').click();
        await page.locator('#dialog-asset-manufacturer').fill('fluke');
        await page.locator('#ui-id-3').click();
        await page.locator('select[name=\'PhysicalLocationId\']', 'H&R Plant');
        const selectValue = await page.$eval("select[name=\'PhysicalLocationId\']", (element) => element.value);
        expect(selectValue).toContain('H&R Plant');
        await page.locator('input[name="ModelNumber"]').click();
        await page.locator('input[name="ModelNumber"]').fill('258');
        await page.locator('input[name="FunctionalLocation"]').click();
        await page.locator('input[name="FunctionalLocation"]').fill('ROOm');
        await page.locator('input[name="SerialNumber"]').click();
        await page.locator('input[name="SerialNumber"]').fill('25886');
        await page.locator('select[name="DepartmentId"]').selectOption('34');
        // await page.locator('div').filter({ hasText: 'Classifications' }).locator('div').nth(1).click();
        // await page.getByText('Classification 1').click();
        // await page.getByText('General').nth(1).click();
        // await page.locator('div').filter({ hasText: 'Next Calibration Date' }).locator('i').click();
        // await page.getByTitle('Next').click();
        // await page.getByRole('row', { name: '1 2 3 4' }).getByRole('cell', { name: '1' }).click();
        // await page.locator('select[name="CalibrationFrequencyId"]').selectOption('2');
        await page.locator('#dialog-asset-remarks').click();
        await page.locator('#dialog-asset-remarks').fill('Calibration');
        // await page.getByRole('listitem').filter({ hasText: 'Test Specifications' }).click();
        // await page.locator('#dialog-test-specification-title').click();
        // await page.locator('#dialog-test-specification-title').fill('Asset Calibration');
        // await page.locator('#dialog-test-specification-type-id').selectOption('1');
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeLow"]').click();
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeLow"]').fill('10');
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeHigh"]').click();
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.RangeHigh"]').fill('50');
        // await page.locator('select[name="TestSpecification\\.ManualPassFail\\.RangeResolution"]').selectOption('2');
        // await page.locator('div').filter({ hasText: 'Unit' }).locator('div').nth(1).click();
        // await page.locator('input[type="select-one"]').fill('nm');
        // await page.locator('div').filter({ hasText: 'nm' }).nth(3).click();
        // await page.locator('select[name="TestSpecification\\.ManualPassFail\\.ToleranceTypeId"]').selectOption('2');
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.Tolerance"]').click();
        // await page.locator('input[name="TestSpecification\\.ManualPassFail\\.Tolerance"]').fill('5');
        await page.getByRole('button', { name: 'Save and Close' }).click();

        await page.locator(".avatar-initials").click();
        await page.getByText("Sign Out").click();
    });
});
