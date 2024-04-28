const Base = require('../base')

class Header extends Base {

    constructor(page) {
        super(page);

    }

    async openLoginMenu() {
        await this.page.locator('.personal.top.login.twosmallfont').click()
    }

    async activateSearchPanel() {
        await this.page.locator('.pull-left.search_wrap.wide_search > .search-block.inner-table-block > .search-wrapper > #title-search_fixed').click();
    }

}

module.exports = Header;