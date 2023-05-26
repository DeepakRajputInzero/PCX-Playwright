import { test, expect } from "@playwright/test";
import loginPage  from '../../../pages/loginPage';
import InstrumentMulti from '../../../pages/InstrumentMulti';



  test("Create New Instrument record- Test Point Accuracy", async ({
    page,
  }) => {
    let login = new loginPage(page);
    let instruments = new InstrumentMulti(page);
    //Login to Application
    await login.navigateUrl();
    await expect(page).toHaveTitle("PCX - Sign In");
    await login.loginApp("deepakr@inzerotech.com", "Deepak@605");
    //Login to Application  
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
     await instruments.fillManualAssetId();        
     // Fill Description
     await instruments.fillInstrumentsName("Instruments Calibration");
     //Fill Manufacturer
     await instruments.fillManufectureName("Fluke");  
     
     // Select Physical Location
     await instruments.selectPhysicalLoc("51");
    
     // Fill Model Number   
     await instruments.fillModelNumber("M-4258");
     // await page.waitForLoadState();
     //Select functional Location    
     await instruments.functionalLoc("Noise Room");
     //Fill Serial Number
     await instruments.fillSerialNum("SN-58");
    
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
       .fillTitle(instruments.randomManual);
     //Select type as Manual Test
     await instruments.selectTypeTest("3");
    //Select Stratgey
    await instruments.selectStrategy("3");
    //fill Low range
    await instruments.fillTPALowRange("10");
    //fill high range
    await instruments.fillTPAHighRange("50");

    //select resolution
    await instruments.selectTPAResolustion("3");

    //SELECT unit
    await instruments.selectTPAUnit("nm");
    //select tolrence
    await instruments.selectTPAResolustion("3");

    //fill tolrance 
    await instruments.fillTPATolrance("5");

    await instruments.saveAndClose();
  });

