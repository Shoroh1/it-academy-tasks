const {test: base, expect} = require('@playwright/test');
const MainPage = require('../page_objects/mainPage');
const GadgetsPage = require('../page_objects/gadgetsPage');

const test = base.extend({
    page: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigate('https://alloplus.by');
        await mainPage.cookiesButton();
        await use(page);
    }
})

test('should checking for incorrect login and password entry.' +
    'to receive a corresponding message about entering an incorrect login and password', async ({page}) => {

    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/');
    await mainPage.cookiesButton();
    await mainPage.loginPage();
    await expect(mainPage.errorMessage).toHaveText('Неверный логин или пароль');
})

test('should checking the functionality of the search field on the site', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/');
    await mainPage.cookiesButton();
    await mainPage.searchField();
    await expect(await page.url()).toEqual('https://alloplus.by/catalog/?q=iPhone&s=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA');
})

test('should opening a field on the Catalog website and moving to another page from the drop-down list', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://alloplus.by/');
    await mainPage.cookiesButton();
    await mainPage.goToSuggestCatalogItemByNumber();
    await expect(mainPage.getTitleName).toHaveText('Гаджеты');
})

test('should shows how the cart works,' +
    ' with adding goods to it and increasing the product counter.' +
    ' Catch the error, does not increase the cost inside the cart when the item counter is increased', async ({page}) => {
    const mainPage = new MainPage(page);
    const gadgetsPage = new GadgetsPage(page);
    await gadgetsPage.navigate('https://alloplus.by/catalog/gadzhety/');
    await mainPage.cookiesButton();
    await gadgetsPage.checkBoxFilter();
    await expect(gadgetsPage.totalPriceBlock).toHaveText('1 999 руб.');
})

test('should shows the cart label when all items have been removed from it', async ({page}) => {
    const gadgetsPage = new GadgetsPage(page);
    await gadgetsPage.navigate('https://alloplus.by/catalog/gadzhety/');
    await gadgetsPage.basketPositionDelete();
    await expect(gadgetsPage.cartContents).toHaveText('Ваша корзина пуста');
})