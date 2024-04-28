const Base = require('../page_objects/base');

class GadgetsPage extends Base {
    constructor(page) {
        super(page);
    }

    get filterCheckBox() {
        return this.page.locator('#smartfilter > div:nth-child(7) > div.bx_filter_block.limited_block > div.bx_filter_parameters_box_container > label:nth-child(2) > span > span').check();
    }

    get itemWrap() {
        return this.page.locator('#bx_3966226736_171985 > div > div.item_info.TYPE_1 > div.item-title > a');
    }

    get buyButton() {
        return this.page.locator('#bx_117848907_171985_basket_actions > span');
    }

    get openBasket() {
        return this.page.locator('.basket_count.small.clicked');
    }

    get basketCounter() {
        return this.page.locator('.counter__btn.counter__btn--plus.plus')
    }

    get deletePosition(){
        return this.page.locator('.custom-basket__tbody-btn')
    }

    get cartContents() {
        return this.page.locator('.basket_wrapp.fly.basket_fill_DARK > p > .errortext')
    }

    get totalPriceBlock() {
        return this.page.locator('.total-block > .total-block__value.fwb')
    }

    async checkBoxFilter() {
        await this.filterCheckBox
        await this.itemWrap.click();
        await this.buyButton.click();
        await this.openBasket.click();
        await this.basketCounter.click();
    }

    async basketPositionDelete(){
        await this.filterCheckBox
        await this.itemWrap.click();
        await this.buyButton.click();
        await this.openBasket.click();
        await this.deletePosition.click();
    }
}

module.exports = GadgetsPage;