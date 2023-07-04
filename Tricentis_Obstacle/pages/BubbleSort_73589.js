const { By } = require("selenium-webdriver/lib/by");

class BubbleSort_73589 {
    constructor(driver) {
        this.driver = driver;
    }

    async getLeftBubbleNumber() {
        return await this.driver.findElement(By.xpath('(//div[@class="bubble"]/div[@class="num"])[1]')).getAttribute("innerText");
    }

    async getRightBubbleNumber() {
        return await this.driver.findElement(By.xpath('(//div[@class="bubble"]/div[@class="num"])[2]')).getAttribute("innerText");
    }

    async clickSwapButton() {
        await this.driver.findElement(By.xpath('//*[@id="button1"]')).click();
    }

    async clickNextButton() {
        await this.driver.findElement(By.xpath('//*[@id="button2"]')).click();
    }

    async isCompleted() {
        return await this.driver.findElement(By.xpath('//h2[text()="Good job!"]')).isDisplayed();
    }
}

module.exports = BubbleSort_73589;