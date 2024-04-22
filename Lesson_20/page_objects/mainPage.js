const Base = require('../page_objects/base');
const Header = require('../page_objects/componenst/header')

class MainPage extends Base {

    constructor(page) {
        super(page);

    }
    get cookiesExitButton() {
        return this.page.locator('.modal-popup > a');
    }

    get loginField() {
        return this.page.locator('[name="USER_LOGIN"]')
    }

    get passwordField() {
        return this.page.locator('[name="USER_PASSWORD"]')
    }

    get loginButton() {
        return this.page.locator('.btn.btn-default.bold')
    }

    get loginError() {
        return this.page.locator('.alert.alert-danger')
    }

    get searchInputField() {
        return this.page.locator('.search-input#title-search-input_fixed[placeholder="Поиск"]')
    }

    get searchButton() {
        return this.page.locator('.search-button-div [type="submit"]')
    }

    get suggestCatalogMenu() {
        return this.page.locator('.wrap > .dropdown-toggle[href="/catalog/"]');
    }

    get suggestCatalogItem() {
        return this.page.locator('.section_info a')
    }

    async getPageName(itemName) {
        return this.page.locator(`//*[@id="pagetitle" and text()='${itemName}']`)
    }

    async cookiesButton() {
        //await this.cookiesExitButton.waitIsDisplayed();
        await this.cookiesExitButton.click();
    }

    async loginPage(name, password) {
        let header = new Header(this.page)
        let username;
        await header.openLoginMenu();
       // await this.page.loginField.waitForDisplayed();
        await this.loginField.click();
        await this.loginField.setValue(name);
        await this.passwordField.waitForDisplayed();
        await this.passwordField.click();
        await this.page.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async searchField() {
        await header.writeTextInSearchPanel();
        await this.searchInputField.waitForDisplayed();
        await this.searchInputField.keyboard.type('iPhone')
        await this.searchButton.waitForDisplayed;
        await this.searchButton.click()
    }

    async goToSuggestCatalogItemByNumber(suggestItemNumber, itemName) {
        await this.suggestCatalogMenu.waitForDisplayed();
        await this.suggestCatalogMenu.click();
        await this.suggestCatalogItem[suggestItemNumber].click();
        await (await this.getPageName(itemName).waitForDisplayed);
    }

}


module.exports = MainPage;