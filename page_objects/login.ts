import { Locator, Page } from '@playwright/test';
import testData from '../test_data/testData'

export class LoginPage {
  readonly page: Page;
  readonly loginUserNameInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginContinueButton: Locator;
  readonly loginSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginUserNameInput = page.locator('#username');
    this.loginContinueButton = page.locator('button:has-text("Continue With Password")');
    this.loginPasswordInput = page.locator('#password-login-password');
    this.loginSubmitButton = page.locator('#password-login button:has-text("Sign In")')
  }

  async login() {
    await this.loginUserNameInput.fill(testData.userCredentials.useremail)
    await this.loginContinueButton.click()
    await this.loginPasswordInput.fill(testData.userCredentials.password)
    await Promise.all([
      this.page.waitForNavigation(),
      this.loginSubmitButton.click()
    ])
  }
}