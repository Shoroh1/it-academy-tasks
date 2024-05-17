const {$} = require('@wdio/globals')
const Base = require('./base');


class LoginPage extends Base {

    get openLoginPage() {
        return $(':nth-child(3) > .h-drop__head')
    }

    get inputUsername() {
        return $('.form-group > input[placeholder="Ваш email или номер телефона"]');
    }

    get inputPassword() {
        return $('.form-group > input[placeholder="Пароль"]');
    }

    get btnSubmit() {
        return $('.modal-popup-form > form > :nth-child(4) > .btn');
    }

    get loginError() {
        return $('form > div:nth-child(1) > span')
    }


    async login(username, password) {
        await this.openLoginPage.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
