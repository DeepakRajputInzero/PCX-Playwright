import { Page, Locator, test, expect } from "@playwright/test";
export default class InstrumentMulti {

  readonly page: Page;
 

  NEW_BTN = "li.nav-new>a";
  INSTRUMENT_BTN = "ul.new-dropdown-menu>li:nth-child(2)";
  MAX_WINDOW = ".dialog-toggle-maximize";
  ASSET_ID = "#dialog-asset-id";
  ASSET_NAME = "#dialog-asset-name";
  MANUFEC_NAME = '#dialog-asset-manufacturer';
  PHYSICAL_LOC = "select[name='PhysicalLocationId']";
  MODEL_NUM = "input[name='ModelNumber']";
  FUNC_LOC = "input[name='FunctionalLocation']";
  SN_NUM = "input[name='SerialNumber']";
  DEP_ID = "select[name='DepartmentId']";
  FREQ_VAL = "select[name='CalibrationFrequencyId']";
  REMARKS = "#dialog-asset-remarks";
  constructor(page: Page) {
    this.page = page
    
  }

  //Random Number Genrater
  
  minNumber = 40;
  maxNumber = 10000;
  randomNumber= Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
  locString = "Instrument-Id-00" + this.randomNumber;

  //Genrate Asset Id
  randomManual = "TestSpec-Manual-00" + this.randomNumber;
  randomSwitch = "TestSpec-Switch-00" + this.randomNumber;
  randomTPAcc = "TestSpec-TPAcc-00" + this.randomNumber;
  randomID = "Update-ID-00" + this.randomNumber;


  async clickOnNewBtn() {
    await this.page.locator(this.NEW_BTN).click();
  }

  async clickOnInstrument() {
    await this.page.locator(this.INSTRUMENT_BTN).click();
  }

  async maximizeWindow() {
    await this.page.locator(this.MAX_WINDOW).click();
  }

  async fillAssetId() {
    await this.page.locator(this.ASSET_ID).fill(this.locString);
  }

  async fillInstrumentsName(InsName: string) {
    await this.page.locator(this.ASSET_NAME).fill(InsName);
  }

  async fillManufectureName(mnane: string) {
    await this.page.locator(this.MANUFEC_NAME).clear();
    await this.page.locator(this.MANUFEC_NAME).fill(mnane);
    await this.page.waitForTimeout(200);
  }

  async selectPhysicalLoc(val: string) {
    await this.page.locator(this.PHYSICAL_LOC).selectOption(val)
  }

  async fillModelNumber(mnum: string) {
    await this.page.locator(this.MODEL_NUM).fill(mnum);
  }

  async functionalLoc(floc: string) {
    await this.page.locator(this.FUNC_LOC).fill(floc)
  }

  async fillSerialNum(snumber: string) {
    await this.page.locator(this.SN_NUM).type(snumber);
  }

  async selectDepartment(depId: string) {
    await this.page.locator(this.DEP_ID).selectOption(depId);
    
}
  async classificationVal() {
    await this.page.locator(".selectize-input").click();
    // Select Classification multiple
    await this.page.getByText("Classification 1").click();
    await this.page.getByText("Critical", { exact: true }).click();
  } 
  
  async frequencyVal(val: string) {
   await this.page
    .locator(this.FREQ_VAL)
    .selectOption(val)
  }

  async datePic() {
    await this.page.click(
      '.far.fa-calendar-alt'
    );
    const mmYY = this.page.locator(
      '.ui-datepicker-title'
    );
    const prev = this.page.locator(
      '.ui-datepicker-prev'
    );
    const next = this.page.locator(
      '.ui-datepicker-next'
    );
    await next.click();
    // const dateSelected = await this.page.waitForSelector(
    //   '#ui-datepicker-div > table > tbody > tr:nth-child(3) > td.ui-datepicker-days-cell-over.ui-datepicker-today > a'
    // );
    await this.page.waitForTimeout(200);
    await this.page.locator("#ui-datepicker-div > table > tbody > tr:nth-child(3) > td:nth-child(5) > a").click();
  }

  async remarks(rem: string) {
    await this.page.locator(this.REMARKS).type(rem);
  }
    
   
  
}
//         //random value input in Asset ID
//         await page.locator(this.assetId).click();
//         await page.locator(this.assetId).fill(locString);
//         await page.locator("#dialog-asset-name").click();
//         // Fill Description
//         await page.locator("#dialog-asset-name").fill("Instrument Calibration");
//         await page.locator("#dialog-asset-manufacturer").click();
//         //Fill Manufacturer
//         await page.locator("#dialog-asset-manufacturer").fill("fluke");
//         await page.locator("#ui-id-3").click();
//         // Select Physical Location
//         await page.locator("select[name='PhysicalLocationId']").selectOption("51");
//         // Fill Model Number
//         await page.locator('input[name="ModelNumber"]').click();
//         await page.locator('input[name="ModelNumber"]').fill("258");
//         //Select functional Location
//         await page.locator('input[name="FunctionalLocation"]').click();
//         await page.locator('input[name="FunctionalLocation"]').fill("Noise Room");
//         //Fill Serial Number
//         await page.locator('input[name="SerialNumber"]').click();
//         await page.locator('input[name="SerialNumber"]').fill("25886");
//         //Select Department ID
//         await page.locator('select[name="DepartmentId"]').selectOption("34");
//         await page.locator(".selectize-input").click();
//         // Select Classification multiple
//         await page.getByText("Classification 1").click();
//         await page.getByText("Critical", { exact: true }).click();
    
//         await page
//           .locator('//*[@id="tab-asset-details"]/div[3]/div[3]/select')
//           .selectOption("3");
    
//         // Date pic
//         await page.click(
//           '//*[@id="tab-asset-details"][@id="tab-asset-details"]/div[3]/div[2]/div/span/i'
//         );
//         const mmYY = page.locator(
//           '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/div'
//         );
//         const prev = page.locator(
//           '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[1]'
//         );
//         const next = page.locator(
//           '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/div/a[2]'
//         );
//         await next.click();
//         await page.click(
//           '//*[@id="ui-datepicker-div"][@id="ui-datepicker-div"]/table/tbody/tr[4]/td[6]/a'
//         );
//         //Fill Remarks
//         await page.locator("#dialog-asset-remarks").click();
//         await page.locator("#dialog-asset-remarks").fill("Calibration");
//     }
    
//     // async login(username, password){
//     //     await this.username_textbox.fill(username);
//     //     await this.password_textbox.fill(password);
//     //     await this.login_button.click();
//     // }
    
// }