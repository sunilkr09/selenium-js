const { By } = require("selenium-webdriver/lib/by");

class Empty_66667 {
    constructor(driver) {
        this.driver = driver;
    }

    async getAllTheCheckPoints() {
        return await this.driver.findElements(By.className('checkpoint'));
    }

    async clickGenerateMaze() {
        await this.driver.findElement(By.id('generate')).click();
    }

    async isCompleted() {
        return await this.driver.findElement(By.xpath('//h2[text()="Good job!"]')).isDisplayed();
    }
}

module.exports = Empty_66667;
