describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sila.by/')
    cy.get('.top > .top_transp > .top_transp__btn').click();
    cy.get('.header_menu_sub__wrap > :nth-child(6)').click()
    cy.get('.header_menu_under__item-open > .header_menu_column_one > .header_menu_under__item > .header_menu_spoiler > a').click()
    cy.get('#idsortSAMSUNG').check()
    cy.get('p > span > u').click()
  })
})