const Base = require('../base')

class Header extends Base {

    constructor(page) {
        super(page);

        //this.loginMenu = async () => page.locator('.personal.top.login.twosmallfont');
        this.searchPanel = async () => page.locator('.search-input#title-search-input_fixed[placeholder="Поиск"]')
    }

    async openLoginMenu() {
        await this.page.locator('.personal.top.login.twosmallfont').click()
       // await this.loginMenu.click();


    }
    async writeTextInSearchPanel(){
        await this.searchPanel().isVisible();
        await this.searchPanel().click();
    }
}

module.exports = Header;