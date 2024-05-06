const Base = require('./base');

class MainPage extends Base {
    get loginPageButton() {
        return cy.get(':nth-child(3) > .h-drop__head').click()
    }
    get openCatalogMenu() {
        return cy.get('.js-mm-opener')
    }
    get selectSuggestItem(){
        return cy.get('ul.catalog-navigation-list');
    }

    get showSectionName(){
        return cy.get('.section-part > .section-heading > .section-heading__title')
    }

    enterSuggestItem(itemText) {
        this.openCatalogMenu.click();
        this.selectSuggestItem.contains(`${itemText}`).click()
    }

}

module.exports = new MainPage()