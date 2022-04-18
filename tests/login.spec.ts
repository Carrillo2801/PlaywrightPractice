import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/homePage'
import { LoginPage } from '../page_objects/login'

test.describe('User should be able to login correctly', () => {

  test('Login on 16u', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.setViewPort("16u")
    await page.goto('https://www.wsj.com/')
    await Promise.all([
      page.waitForNavigation(),
      homePage.homePageHeaderSignInButton.click()
    ])
    await loginPage.login()
    await homePage.homePageHeaderCustomerName.click()
    await homePage.homePageCustomerNavSignOut.click()
    await expect(page).toHaveURL('https://www.wsj.com/')
  })

  test('Login on 12u', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.setViewPort("12u")
    await page.goto('https://www.wsj.com/')
    await Promise.all([
      page.waitForNavigation(),
      homePage.homePageHeaderSignInButton.click()
    ])
    await loginPage.login()
    await homePage.homePageHeaderCustomerName.click()
    await homePage.homePageCustomerNavSignOut.click()
    await expect(page).toHaveURL('https://www.wsj.com/')
  })

  test('Login on 8u', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.setViewPort("8u")
    await page.goto('https://www.wsj.com/')
    await homePage.homePageBurgerMenu.waitFor(),
    await Promise.all([
      page.waitForNavigation(),
      homePage.homePageHeaderSignInButton.click()
    ])
    await loginPage.login()
    await homePage.homePageBurgerMenu.click()
    await homePage.homePageMyAccount.click()
    await homePage.homePageMyAccountSignOut.click()
    await expect(page).toHaveURL('https://www.wsj.com/')
  })

  test('Login on 4u', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.setViewPort("4u")
    await page.goto('https://www.wsj.com/')
    await homePage.homePageBurgerMenu.waitFor(),
    await Promise.all([
      page.waitForNavigation(),
      homePage.homePageHeaderSignInButton.click()
    ])
    await loginPage.login()
    await homePage.homePageBurgerMenu.click()
    await homePage.homePageMyAccount.click()
    await homePage.homePageMyAccountSignOut.click()
    await expect(page).toHaveURL('https://www.wsj.com/')
  })
}); 