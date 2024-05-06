const Base = require('../base')

class Search extends Base {

    get searchField(){
        return cy.get('.h-search > :nth-child(2) > input[placeholder="Поиск товара"]');
    }

    get findBtn() {
        return cy.get(' form:nth-child(2) > button.btn.btn--clear');
    }

    get findError() {
        return cy.get('.section-error')
    }

    inputTextInSearchField(text){
        this.searchField.click({force:true})
        this.searchField.type(text, {force:true})
        this.findBtn.click()
    }
}


module.exports = new Search()