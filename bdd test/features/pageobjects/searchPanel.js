const {$} = require('@wdio/globals')
const Base = require('./base');

class SearchPanel extends Base {
    get activateSearchPanel() {
        return $('.h-search > :nth-child(2) > input[placeholder="Поиск товара"]')
    }

    get activeSearchPanel() {
        return $('div.multi-search > div.multi-search-header > form > input.inp.inp--lg')
    }

    get findBtn() {
        return $('.multi-search-header__submit')
    }

    get findTitleText() {
        return $('.section-heading__title')
    }

    async inputInSearchPanel(product) {
        await this.activateSearchPanel.click()
        await this.activeSearchPanel.setValue(product)
        await this.findBtn.click()
    }
}

module.exports = new SearchPanel();