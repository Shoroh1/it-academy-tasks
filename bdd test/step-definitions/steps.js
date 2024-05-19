const {Given, When, Then, Before} = require('@wdio/cucumber-framework');
const {expect, $} = require('@wdio/globals')

const loginPage = require('../features/pageobjects/login.page.js')
const searchPanel = require('../features/pageobjects/searchPanel')
const mainPage = require('../features/pageobjects/mainPage')
const region = require('../features/pageobjects/components/regionSwitch')


Given(/^I navigate to (.*)$/, async (url) => {
    await loginPage.navigate(url);
});

When("I open login Page and write {string} and {string}", async (email, password) => {
    await loginPage.login(email, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(loginPage.loginError).toHaveText(message);
});

When('I looking for a product {string} using the search bar', async (product) => {
    await searchPanel.inputInSearchPanel(product)
})

Then(/^I checking the correctness of the product in (.*)$/, async (title) => {
    await expect(searchPanel.findTitleText).toHaveText(title)
})

When('I switch region Minsk to {string}', async (name) => {
    await region.switchRegion(name)
})

Then('I check the selected {string} on the website', async (regionName) => {
    await expect(region.nameSelectedRegion).toHaveText(regionName);
})

When('I go to the catalog menu on page', async () => {
    await mainPage.itemSelect();
})

Then('I should a {string} page name', async (title) => {
    await expect(mainPage.navigationTitle).toHaveText(title)
})