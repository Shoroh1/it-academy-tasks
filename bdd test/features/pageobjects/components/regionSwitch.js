const { $ } = require('@wdio/globals')
const Base = require('../base')

class Region extends Base {
    get openRegionMenu() {
        return $('.h-drop.h-geo > .h-drop__head')
    }
    get inputRegionField(){
        return $('.inp-ic-toggle > input[placeholder="Введите название города или поселка"]')
    }

    get selectRegion(){
        return $('.optgroup > :nth-child(1)')
    }

    get nameSelectedRegion() {
        return $('.h-drop.h-geo .h-drop__text')
    }

    async switchRegion(name, num){
        await this.openRegionMenu.click()
        await this.inputRegionField.click()
        await this.inputRegionField.setValue(name)
        await this.selectRegion.click()
    }
}

module.exports = new Region();