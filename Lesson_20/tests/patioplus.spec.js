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

test('should error message to login page ', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/');
    await mainPage.cookiesButton();
    await mainPage.loginPage()
    await expect(mainPage.errorMessage).toHaveText('Неверный логин или пароль')
})

test('should search input', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/')
    await mainPage.cookiesButton();
    await mainPage.searchField()
    await expect(await page.url()).toEqual('https://alloplus.by/catalog/?q=iPhone&s=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA')
})

test('should open the catalog page', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/')
    await mainPage.cookiesButton();
    await mainPage.goToSuggestCatalogItemByNumber(2);
    await mainPage.getPageName('Гаджеты')
    await expect( page.getByTitle()).toEqual('Купить гаджеты в Минске | Гаджеты недорого')
})