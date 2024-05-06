const Base = require('../base')

class Cookies extends Base {

    get declineCookiesBtn() {
        return cy.get('.js-cookie-popup-cancel.btn.btn--block.btn--index')
    }
}

module.exports = new Cookies()