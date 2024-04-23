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
        return this.page.locator('input[name="USER_LOGIN"]')
    }

    get passwordField() {
        return this.page.locator('input[name="USER_PASSWORD"]')
    }

    get loginButton() {
        return this.page.locator('.btn.btn-default.bold')
    }

    get errorMessage() {
        return this.page.locator('.alert.alert-danger > p');
    }

    get searchInputField() {
        return this.page.locator('#header input[placeholder="Поиск"]');
    }

    get searchButton() {
        return this.page.locator('#header .search-button-div [type="submit"]')
    }

    get suggestCatalogMenu() {
        return this.page.locator('.wrap > .dropdown-toggle[href="/catalog/"]');
    }

    get suggestCatalogItem() {
        return this.page.locator('.section_info a')
    }

    async getPageName(itemName) {
        return this.page.locator(`//*[@id="pagetitle" and text()='${itemName}']`).all();
    }

    async cookiesButton() {
        //await this.cookiesExitButton.waitIsDisplayed();
        await this.cookiesExitButton.click();
    }

    async loginPage() {
        let header = new Header(this.page)
        await header.openLoginMenu();
        await this.loginField.fill('username');
        await this.passwordField.fill('password');
        await this.loginButton.click();
    }

    async searchField() {
        let header = new Header(this.page)
        await header.activateSearchPanel();
        await this.searchInputField.fill('iPhone')
        await this.searchButton.click()
    }

    async goToSuggestCatalogItemByNumber(suggestItemNumber) {
        await this.suggestCatalogMenu.click();
        await this.suggestCatalogItem[suggestItemNumber].click();
    }

}


module.exports = MainPage;