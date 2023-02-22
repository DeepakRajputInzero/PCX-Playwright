
import { test, expect} from '@playwright/test';

test('Login Test-Postive Test-User Name/Password', async ({page}) => {  
  await page.goto('https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F');
  
  await page.locator("input[name='Email']").fill('deepakr@inzerotech.com');
  await expect(page).toHaveTitle(/.*PCX - Sign in/)
  await page.locator("input[name='Password']").fill('Deepak@605');
  await page.pause();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('.avatar-initials').click();
  await page.getByText('Sign Out').click();
 
});

test('Login Test Correct User Name and Incorrect Password-Negative Test', async ({page}) => {
  
    await page.goto('https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F');
    await page.getByPlaceholder('Email').fill('deepakr@inzerotech.com');
    await page.getByPlaceholder('Password').fill('xyz');   
    await page.getByRole('button', { name: 'Sign in' }).click();   
    await page.close();   
    
  });

  test('Login Test Incorrect User Name and Incorrect Password-Negative Test', async ({page}) => {
    
    await page.goto('https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F');
    await page.getByPlaceholder('Email').fill('xyz@in.com');
    await page.getByPlaceholder('Password').fill('xyz');   
    await page.getByRole('button', { name: 'Sign in' }).click();    
     
  });

  test('Login Test Incorrect User Name and Correct Password-Negative Test', async ({page}) => {
    
    await page.goto('https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F');
    await page.getByPlaceholder('Email').fill('xyz@in.com');
    await page.getByPlaceholder('Password').fill('Deepak@605');   
    await page.getByRole('button', { name: 'Sign in' }).click();    
  
  });