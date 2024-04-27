const {test: base, expect} = require('@playwright/test');
const MainPage = require('../page_objects/mainPage')
//const Header = require('../page_objects/componenst/header')

const test = base.extend({
    page: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://alloplus.by');
        await mainPage.cookiesButton();
        await use(page);
    }
})

test('checking for incorrect login and password entry.' +
    'to receive a corresponding message about entering an incorrect login and password', async ({page}) => {

    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/');
    await mainPage.cookiesButton();
    await mainPage.loginPage()
    await expect(mainPage.errorMessage).toHaveText('Неверный логин или пароль')
})

test('Checking the functionality of the search field on the site', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/')
    await mainPage.cookiesButton();
    await mainPage.searchField()
    await expect(await page.url()).toEqual('https://alloplus.by/catalog/?q=iPhone&s=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA')
})

test('opening a field on the Catalog website and moving to another page from the drop-down list', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/')
    await mainPage.cookiesButton();
    await mainPage.goToSuggestCatalogItemByNumber();
    await expect(mainPage.getTitleName).toHaveText('Гаджеты')
})
