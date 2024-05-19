const {$} = require('@wdio/globals')
const Base = require('./base');

class MainPage extends Base {
    get openCatalogList() {
        return $('.js-mm-opener')
    }

    get selectNavigationItem() {
        return $('[data-trig="drop-4"] > .catalog-navigation-trig > .catalog-navigation-trig__name')
    }

    get navigationTitle() {
        return $('.section-part > .section-heading > .section-heading__title')
    }

    async itemSelect() {
        await this.openCatalogList.click()
        await this.selectNavigationItem.click()
    }

}

module.exports = new MainPage();