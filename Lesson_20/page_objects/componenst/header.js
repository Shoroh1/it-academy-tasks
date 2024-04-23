const Base = require('../base')

class Header extends Base {

    constructor(page) {
        super(page);

        //this.loginMenu = async () => page.locator('.personal.top.login.twosmallfont');
        //this.searchPanel = async () => page.locator('.search-input#title-search-input_fixed[placeholder="Поиск"]')
    }

    async openLoginMenu() {
        await this.page.locator('.personal.top.login.twosmallfont').click()
       // await this.loginMenu.click();
    }

    async activateSearchPanel() {
        await this.page.locator('.pull-left.search_wrap.wide_search > .search-block.inner-table-block > .search-wrapper > #title-search_fixed').click();
    }
    // async activateSearchPanel(){
    //     await this.page.locator('#title-search_fixed > .search > .search-input-div').click();
    // }
}

module.exports = Header;