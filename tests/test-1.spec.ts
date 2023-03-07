import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2FAssets');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('d');await page.getByPlaceholder('Email').fill('de');await page.getByPlaceholder('Email').fill('dee');await page.getByPlaceholder('Email').fill('deep');await page.getByPlaceholder('Email').fill('deepa');await page.getByPlaceholder('Email').fill('deepak');await page.getByPlaceholder('Email').fill('deepakr');await page.getByPlaceholder('Email').fill('deepakra');await page.getByPlaceholder('Email').fill('deepakr');await page.getByPlaceholder('Email').fill('deepakr@');await page.getByPlaceholder('Email').fill('deepakr@i');await page.getByPlaceholder('Email').fill('deepakr@in');await page.getByPlaceholder('Email').fill('deepakr@inz');await page.getByPlaceholder('Email').fill('deepakr@inze');await page.getByPlaceholder('Email').fill('deepakr@inzer');await page.getByPlaceholder('Email').fill('deepakr@inzero');await page.getByPlaceholder('Email').fill('deepakr@inzerot');await page.getByPlaceholder('Email').fill('deepakr@inzerote');await page.getByPlaceholder('Email').fill('deepakr@inzerotec');await page.getByPlaceholder('Email').fill('deepakr@inzerotech');await page.getByPlaceholder('Email').fill('deepakr@inzerotech.');await page.getByPlaceholder('Email').fill('deepakr@inzerotech.c');await page.getByPlaceholder('Email').fill('deepakr@inzerotech.co');await page.getByPlaceholder('Email').fill('deepakr@inzerotech.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('D');await page.getByPlaceholder('Password').fill('De');await page.getByPlaceholder('Password').fill('Dee');await page.getByPlaceholder('Password').fill('Deep');await page.getByPlaceholder('Password').fill('Deepa');await page.getByPlaceholder('Password').fill('Deepak');await page.getByPlaceholder('Password').fill('Deepak@');await page.getByPlaceholder('Password').fill('Deepak@6');await page.getByPlaceholder('Password').fill('Deepak@60');await page.getByPlaceholder('Password').fill('Deepak@605');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Assets' }).click();
  await page.getByRole('link', { name: ' New' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Instrument' }).click();
  await page.getByTitle('Maximize').click();
  await page.locator('#dialog-asset-id').click();
  await page.locator('#dialog-asset-id').fill('O');await page.locator('#dialog-asset-id').fill('OK');await page.locator('#dialog-asset-id').fill('OKJ');await page.locator('#dialog-asset-id').fill('OKJJ');
  await page.locator('#dialog-asset-name').click();
  await page.locator('#dialog-asset-name').fill('N');await page.locator('#dialog-asset-name').fill('NH');await page.locator('#dialog-asset-name').fill('NHG');await page.locator('#dialog-asset-name').fill('NHGF');
  await page.locator('div').filter({ hasText: 'New Instrument Save and Close Save and New Save and Close' }).getByTitle('Close').click();
  await page.getByRole('button', { name: 'OK' }).click();await page.getByRole('button', { name: 'OK' }).click();
});