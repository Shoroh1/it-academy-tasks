const Base = require('../page_object/base')

class Smartphones extends Base {
    elements = {
        changeSort: () => cy.get('.filter-line > .inp-dropdown > .btn'),
        selectRatingSorting: () => cy.get('.inp-dropdown__list > :nth-child(3) > .inp-box > .inp-box__label > .inp-box__view'),
        clickCompareBtnFirstPhone: () => cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-actions > [title="В сравнение"] > .ic-compare'),
        clickCompareBtnSecondPhone: () => cy.get(':nth-child(1) > :nth-child(3) > .card-product-full > :nth-child(3) > .c-actions > [title="В сравнение"] > .ic-compare'),
        openAddedCompareItem: () => cy.get('.h-added-drop.h-drop.js-drop-select > .n-item.js-drop-select-trigger > .n-item__icon.ic-compare'),
        goToCompareBtn: () => cy.get('.h-drop__bttns > .btn'),
        getItemInCarousel: () => cy.get('.carousel-compare-main > .carousel-slider').find('.card-product')
    }

    selectManyPhones(){
        this.elements.changeSort().click()
        this.elements.selectRatingSorting().click()
        this.elements.clickCompareBtnFirstPhone().click()
        this.elements.clickCompareBtnSecondPhone().click()
        this.elements.openAddedCompareItem().click()
        this.elements.goToCompareBtn().click()

    }
}

module.exports = new Smartphones()