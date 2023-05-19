import { Page, Locator, test, expect } from "@playwright/test";
export default class InstrumentMulti {

  readonly page: Page;
 

  NEW_BTN = "li.nav-new>a";
  INSTRUMENT_BTN = "ul.new-dropdown-menu>li:nth-child(2)";
  MAX_WINDOW = ".dialog-toggle-maximize";
  INSTRUMENT_ID = "#dialog-asset-id";
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
  instrumentId = "Instrument-Id-00" + this.randomNumber;
  switchId = "Instrument-Id-00" + this.randomNumber;
  tstandardId = "TestAP-Id-00" + this.randomNumber;
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

  async fillManualAssetId() {
    await this.page.locator(this.INSTRUMENT_ID).fill(this.instrumentId);
  }

  async fillSwicthAssetId() {
    await this.page.locator(this.INSTRUMENT_ID).fill(this.switchId);
  }

  async fillTStandardId() {
    await this.page.locator(this.INSTRUMENT_ID).fill(this.tstandardId);
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
    
  async clickOnTestSpecification() {
    await this.page.click("text=Test Specifications");
  }

  async fillTitle(title: string) {
    await this.page.locator
      (
        "(//input[@class='dialog-test-specification-title'])[2]"
      ).type(title);
  }
   //Select type on test specification
  async selectTypeTest(type: string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[1]/div[3]/select'
      )
      .selectOption(type);
  }

  async fillLowRange(lowrange: string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div/div[2]/input'
      )
      .fill(lowrange);
  }

  async fillHighRange(highrange:string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"][@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[3]/input'
      )
      .fill(highrange);
  }

  async selectResolution(option: string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[4]/select'
      )
      .selectOption(option);
  }

  async selectUnit(unit: string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[1]/div[5]/div/div[1]/input'
      )
      .fill(unit);
  }

  async selectTolrence(tol: string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[2]/select'
      )
      .selectOption(tol);
  }

  async fillTolrence(tol: string) {
    await this.page
      .locator(
        '//*[@id="dialog-test-specifications-container"]/div[2]/div[2]/div[2]/div[3]/input'
      )
      .fill(tol);
  }

  async clickOnSave() {
    await this.page
        .getByRole("button", { name: "Save and Close" })
        .click();
  }

  async selectTripDetection(option: string) {
    //Select Trip Detection Method
    await this.page
      .locator(
        '.dialog-trip-detection-method-id'
      )
      .selectOption(option);
  }

  async fillSetTolerence(option: string) {
    
    await this.page
      .locator(
        "(//label[text()='Set Point Tolerance']/following::input)[1]"
      )
      .fill(option);
  }

  async fillSwitchLowRange(option: string) {
    await this.page
      .locator(
        "(//label[text()='Low']/following::input)[1]"
      )
      .fill(option);
  }

  async fillSwitchHighRange(option: string) {
    await this.page
      .locator(
        "(//label[text()='High']/following::input)[1]"
      )
      .fill(option);
  }

  async selectSwitchResolution(reso: string) {
    await this.page.locator("//label[text()='Resolution']/following-sibling::select").selectOption(reso)
  }

  async selectSwicthUnit() {
    await this.page.locator("(//div[contains(@class,'selectize-input items')])[3]")
  }

  async snapshotTest() {

}
  
}
