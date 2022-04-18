import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homePageHeaderSignInButton: Locator;
    readonly homePageHeaderCustomerName: Locator;
    readonly homePageCustomerNavSignOut: Locator;
    readonly homePageBurgerMenu: Locator;
    readonly homePageMyAccount: Locator;
    readonly homePageMyAccountSignOut: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageHeaderSignInButton = page.locator('text=Sign In').first();
        this.homePageHeaderCustomerName = page.locator('[class*="style--masthead"] #customer-nav-full-name');
        this.homePageCustomerNavSignOut = page.locator('text=Sign Out').first();
        this.homePageBurgerMenu = page.locator('[class*="style--burger"]:visible');
        this.homePageMyAccount = page.locator('[class*="style--overlay-tab"] >> text=My Account')
        this.homePageMyAccountSignOut = page.locator('text=SIGN OUT').first()
    }

    async setViewPort(units) {
        switch (units) {
            case "16u":
                await this.page
                    .setViewportSize({
                        width: 1300,
                        height: 800,
                    })
                break;
            case "12u":
                await this.page
                    .setViewportSize({
                        width: 980,
                        height: 800,
                    })
                break;
            case "8u":
                await this.page
                    .setViewportSize({
                        width: 640,
                        height: 800,
                    })
                break;
            case "4u":
                await this.page
                    .setViewportSize({
                        width: 500,
                        height: 800,
                    })
                break;
            default: console.log("Default viewport 1280x720") 
                break;
        }
    }
}