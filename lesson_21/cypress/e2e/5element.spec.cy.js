const mainPage = require('../../page_object/mainPage');
const cookies = require('../../page_object/components/cookies')
const loginFrame = require('../../page_object/components/loginFrame')
const smartphones = require('../../page_object/smartphonesPage')
const searchField = require('../../page_object/components/search')


describe('5element test', () => {
  it('verify login unsuccessful for user not founding', () => {
    cy.visit('https://5element.by/')
    cookies.declineCookiesBtn.wait(2000).click()
    mainPage.loginPageButton.click()
    loginFrame.enterEmail('example@example.com')
    loginFrame.enterPassword('123456789')
    loginFrame.clickLoginBtn();
    expect(loginFrame.elements.errorText().should('contain', 'Пользователь не найден.'));
  })
  it('opens a page in the catalog offer', () => {
    cy.visit('https://5element.by/');
    cookies.declineCookiesBtn.wait(2000).click()
    mainPage.enterSuggestItem("Техника для дома")
    expect(mainPage.showSectionName.should('contain', 'Техника для дома'));
  });
  it('adding a product to comparison ', () => {
    cy.visit('https://5element.by/catalog/377-smartfony')
    cookies.declineCookiesBtn.wait(2000).click()
    smartphones.selectManyPhones()
    expect(smartphones.elements.getItemInCarousel().should('have.length', 2))
  });

  it('search field validation ', () => {
    cy.visit('https://5element.by/');
    searchField.inputTextInSearchField('iPhone')
    cookies.declineCookiesBtn.wait(2000).click()
    expect((searchField.findError.should('contain', "404")))
  });

})