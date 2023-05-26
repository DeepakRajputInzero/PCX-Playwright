import { Page } from "@playwright/test";
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
  STRAGETY = "//select[@data-pcx-selected-id='0']";
  TPA_LOWRANGE = "(//label[text()='Low']/following-sibling::input)[1]";
  TPA_HIGHRANGE = "(//label[text()='High']/following-sibling::input)[1]";
  TPA_TPARESULOSTION = "(//label[text()='Resolution']/following-sibling::select)[1]";
  TPA_TOLRANCE = "//label[text()='Tolerance Type']/following-sibling::select";
  TPA_TOLRANCEVAL = "//label[text()='Tolerance']/following-sibling::input";

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

  async clickOnModule(text: string) {
    await this.page.click(`//a[.='${text}']`)
  }

  async maximizeWindow() {
    await this.page.locator(this.MAX_WINDOW).click();
  }

  async fillManualAssetId() {
    await this.page.locator(this.INSTRUMENT_ID).fill(this.instrumentId);
  }

  async fillSwitchRecord() {
    await this.page.locator("(//label[@title='Title is required.']/following-sibling::input)[3]").fill(this.randomSwitch);
    await this.page.selectOption("(//label[@title='Type is required.']/following-sibling::select)[3]", "2");
    // await this.page.selectOption("//select[@data-pcx-load-url='/TripDetectionMethods/SelectList']", "3");
    // await this.page.type("(//label[text()='Set Point Tolerance']/following::input)[1]", "5");
    // await this.page.waitForTimeout(500);
    // await this.page.fill("((//label[text()='Low'])[3]/following::input)[1]", "10");
    // await this.page.fill("((//label[text()='High'])[3]/following::input)[1]", "50");
    // await this.page.selectOption("(//label[text()='Resolution']/following-sibling::select)[3]", "2");

    // await this.selectManualUnit("nm");
    await this.page.fill("input.dialog-set-points-table-value.error-border", "5");
    await this.page.selectOption("//select[@class='dialog-set-points-table-direction-id error-border']", "1");
    await this.page.selectOption("//select[@class='dialog-set-points-table-trip-state-id error-border']", "2");
    await this.page.click("//i[@title='List View']");
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

  async selectManualUnit(text: string) {
    await this.page.fill("//input[@type='select-one']", text);
    await this.page.click(`//div[text()='${text}']`);
  }

  async selectTPAUnit(text: string) {
    await this.page
      .locator(
        `(//input[@type='select-one'])[2]`
      )
      .fill(text);
    await this.page.click(`//div[text()='${text}']`);
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
    await this.page.locator("(//div[contains(@class,'selectize-input items')])[3]").click();
    await this.page.locator("text=nm").click();
  }

  async fillSetPoint(setpoint:string) {
    await this.page.locator("(//input[@class='dialog-set-points-table-value'])[1]").fill(setpoint);
  }
  
  async selectDirection(option:string) {
    await this.page.locator("(//select[@class='dialog-set-points-table-direction-id'])[1]").selectOption(option);
  }

  async selectTripState(option:string) {
    await this.page.locator("(//select[@class='dialog-set-points-table-trip-state-id'])[1]").selectOption(option);
  }

  async saveAndClose() {
    await this.page.locator("(//button[contains(@class,'pcx-button button-primary')])[1]").click();
  }

  async selectStrategy(option:string) {
    await this.page.selectOption(this.STRAGETY, option)
  }

  async fillTPALowRange(value:string) {
    await this.page.type(this.TPA_LOWRANGE, value)
  }

  async fillTPAHighRange(option: string) {
    await this.page.type(this.TPA_HIGHRANGE, option);
  }

  async selectTPAResolustion(option: string) {
    await this.page.selectOption(this.TPA_TPARESULOSTION, option)
  }

  async selectTPATolrance(option: string) {
    await this.page.selectOption(this.TPA_TOLRANCE, option)
  }

  async fillTPATolrance(value: string) {
    await this.page.type(this.TPA_TOLRANCEVAL, value);
  }

  async clickOnSearchBox() {
    await this.page.click("i.search-options.fas");
  }

  async fillSearchManualAssetId() {
    await this.page.fill("input[name='AssetId']", this.instrumentId);
    await this.page.click("//button[text()='Search']");
  }

  async selectSearchRecord() {
    await this.page.waitForTimeout(500);
    await this.page.click("(//tr[@data-pcx-type='Instrument'])[1]");
  }
  async selectedOperation(value: string) {
  
    await this.page.click(`(//i[@title='${value}'])[1]`);
  }
  
  async selectEditRecordNav(text: string) {
    await this.page.click(`//a[contains(text(),'${text}')]`);
  }

  async clickOnTestSpecNew() {
    await this.page.click("(//i[@title='Add Test Specification'])[3]");
  }
  
}
