const Base = require('../base')

class LoginField extends Base {
    elements = {
        emailInput: () => cy.get('.form-group > input[placeholder="Ваш email или номер телефона"]'),
        passwordInput: () => cy.get('.form-group > input[placeholder="Пароль"]'),
        loginBtn: () => cy.get('.modal-popup-form > form > :nth-child(4) > .btn'),
        errorText: () => cy.get('form > :nth-child(1) > .inp-required')
    }

    enterEmail(email){
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }
    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn() {
        this.elements.loginBtn().click()
    }
}

module.exports = new LoginField()