import { test, expect } from "@playwright/test";
import { loginPage } from '../pages/login.js';

test.describe("Login Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://pcxstaging.primetechpa.com/Identity/Login?ReturnUrl=%2F"
    );
  });

  test.afterEach(async ({page})=>{
    await page.close();
  });

  test("Login Test-Postive Test-User Name/Password", async ({ page }) => {
    const login = new loginPage(page);
    await login.login('deepakr@inzerotech.com', 'Deepak@605');
    await page.locator(".avatar-initials").click();
    await page.getByText("Sign Out").click();

    // await page.locator("input[name='Email']").fill("deepakr@inzerotech.com");
    // await expect(page).toHaveTitle(/.*PCX - Sign in/);
    // await page.locator("input[name='Password']").fill("Deepak@605");
    // await page.getByRole("button", { name: "Sign in" }).click();
    // await page.locator(".avatar-initials").click();
    // await page.getByText("Sign Out").click();
  });

  test("Login Test Correct User Name and Incorrect Password-Negative Test", async ({
    page,
  }) => {
    const login = new loginPage(page);
    await login.login('deepakr@inzerotech.com', 'xyz');
   
  });

  test("Login Test Incorrect User Name and Incorrect Password-Negative Test", async ({
    page,
  }) => {
    const login = new loginPage(page);
    await login.login('xyz@in.com', 'xyz');
  });

  test("Login Test Incorrect User Name and Correct Password-Negative Test", async ({
    page,
  }) => {
    const login = new loginPage(page);
    await login.login('xyz@in.com', 'Deepak@605');
  });
});
