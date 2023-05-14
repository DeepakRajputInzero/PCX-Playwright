
import test from '@lib/BaseTest';

test('@Smoke Verify Equipment records', async ({ loginPage, webActions}) => {
  await loginPage.navigateToURL();
  await webActions.clickByText('New')

})