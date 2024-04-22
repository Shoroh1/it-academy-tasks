const {test: base, expect} = require('@playwright/test');
const MainPage = require('../page_objects/mainPage')
const Header = require('../page_objects/componenst/header')

const test = base.extend({
    page: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://alloplus.by');
        await mainPage.cookiesButton();
        await use(page);
    }
})

    test('alloplus.by test', async ({page}) => {
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://alloplus.by/');
        await mainPage.cookiesButton();
        await mainPage.loginPage("UserName", "password");
    })