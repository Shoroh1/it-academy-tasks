import {By, until, Builder} from "selenium-webdriver";
import {expect} from 'chai'
import {Key} from "selenium-webdriver/lib/input.js";

describe('ChromeDriver', function () {
    let driver;

    before(async () => {
        ///creating instance
        driver = new Builder().forBrowser('chrome').build();
        ///set window size
        await driver.manage().window().setSize({width: 1960, height: 1280})
        ///executing timeouts limits
        await driver.manage().setTimeouts({ implicit: 3000 });
    })

    after(async () => {
        ///dispose
        await driver.quit();
    })

    it('Part 1 : Should check the site title test', async () => {
        ///navigate to Homepage
        await driver.get('https://chromedriver.chromium.org/home')
        /// fetch head title of site ( body -> header -> title )
        const headTitle = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/div/div[1]/section[1]/div[2]/div/div/div/div/div/div/div/div/h1/span')).getText();
        /// check it
        expect(headTitle).to.equal('ChromeDriver');
    })

    it('Part 2: should check Chrome Extension and highlighting element', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        /// find extension button and push it
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/div/header/div/div[2]/div[1]/nav/ul/li[3]/div[1]/div')).click();
        /// finding [Chrome Extensions] element, then click it
        const headTitleExt = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/div/div[1]/section[1]/div[2]/div/div/div/div/div/div/div/div/h1/span'));
        /// check extracted text
        /// must be equal "Chrome Extensions"
        expect(await headTitleExt.getText()).to.equal('Chrome Extensions');
        /// highlighting element (yellow)
        await driver.executeScript("arguments[0].style.backgroundColor = '" + "yellow" + "'", headTitleExt);
    });

    it('Part 3: should search button and write text in search Field ', async () => {
        /// navigate to Homepage
        await driver.get('https://chromedriver.chromium.org/home');
        /// finding Search button and click
        await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]')).click();
        /// enter the search word and emulate the enter button
        await driver.findElement(By.xpath('//input[@type ="search"]')).sendKeys("driver" + Key.ENTER);
        /// check extracted text
        const searchText = await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/div[1]")).getText()
        /// must be equal "driver"
        expect(await searchText).to.contain('driver');
    });

    it('Part 4: should click Menu additional', async () => {
        ///navigate to Homepage
        await driver.get('https://chromedriver.chromium.org/home');
        ///finding button "Дополнительно" and click
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/div/header/div/div[2]/div[1]/nav/ul/li[12]')).click();
        ///click button Mobile emulation
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/div/header/div/div[2]/div[1]/nav/ul/li[12]/div[2]/ul/li[9]/div/div/a')).click();
        ///checking the phrase "mobile-emulation" in URL
        const mobileEmul = await driver.getCurrentUrl()
        expect(mobileEmul).to.contain('/mobile-emulation');
    });
})