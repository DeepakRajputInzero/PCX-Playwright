import { test, expect } from "@playwright/test";
import loginPage  from '../../../pages/loginPage';
import InstrumentMulti from '../../../pages/InstrumentMulti';


  test("Create New Instrument record- Switch Test @instruments", async ({ page }) => {
     //Login to Application 
    let login = new loginPage(page);
    let instruments = new InstrumentMulti(page);
    await login.navigateUrl();
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.loginApp("deepakr@inzerotech.com", "Deepak@605");
    
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://pcxstaging.primetechpa.com/Dashboards');
    await expect(page).toHaveTitle("PCX - Dashboard")
    await expect(page.locator(".selected-filter-name")).toHaveText('Dashboard');
    //Click on New
    await instruments.clickOnNewBtn();
    //Click on Instrument link
    await instruments.clickOnInstrument();

    //Maximize window
    await instruments.maximizeWindow();
    //Fill Page Details 
    await instruments.fillSwicthAssetId();        
    // Fill Description
    await instruments.fillInstrumentsName("Swicth Calibration");
    //Fill Manufacturer
    await instruments.fillManufectureName("Fluke");  
    
    // Select Physical Location
    await instruments.selectPhysicalLoc("51");
   
    // Fill Model Number   
    await instruments.fillModelNumber("SW-4258");
    // await page.waitForLoadState();
    //Select functional Location    
    await instruments.functionalLoc("Noise Room");
    //Fill Serial Number
    await instruments.fillSerialNum("SNW-58");
   
    //Select Department ID
    await instruments.selectDepartment("34");
    
    await instruments.classificationVal();



   await instruments.frequencyVal("3");

    // Date pic
    await instruments.datePic();
    //Fill Remarks
    await instruments.remarks("Calibration on Instrument")

    //Click on Test Specification Tab
    await instruments.clickOnTestSpecification();
    
    await page.waitForLoadState();
    //Fill Title
    await instruments
      .fillTitle(instruments.randomSwitch);
    //Select type as Manual Test
    await instruments.selectTypeTest("2");

    //Select Trip Detection Method
    await instruments.selectTripDetection("1");
       
    //Fset point tolrence
    await instruments.fillSetTolerence("5");
    //Fill Low Range
  
    await instruments.fillSwitchLowRange("10");

    //fill high range
    await instruments.fillHighRange("50");

    // Select resolution
    await instruments.selectSwitchResolution("2");


    //Select Unit nm
    // await instruments.selectUnit("nm");
    // // await page.pause();
    // //Select Tolerance Type
    
    // await instruments.selectTolrence("2")
    // //Fill Tolerance Field
    // await page
    //   .locator(
    //     '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input'
    //   )
    //   .click();
    // await instruments.fillTolrence("5");
 
  });

