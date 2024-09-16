import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByPlaceholder('Enter your active Email ID /').click();
  await page.getByPlaceholder('Enter your active Email ID /').fill('rahulsharmachd11@gmail.com');
  await page.getByPlaceholder('Enter your active Email ID /').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('$Rahul78377$');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.locator('.nI-gNb-bar1').click();
  await page.getByRole('link', { name: 'View & Update Profile' }).click();
  //await page.getByRole('button', { name: 'Update resume' }).click();
  await page.getByRole('button', { name: 'Update resume' }).setInputFiles('./ResumeFolder/QA TEam Lead Rahul_Sharma_CV.pdf');
});