const { Builder } = require("selenium-webdriver");
const edge = require('selenium-webdriver/edge');
const BubbleSort_73589 = require('./pages/BubbleSort_73589.js');
const service = new edge.ServiceBuilder('./drivers/msedgedriver.exe');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').setEdgeService(service).build();

    await driver.manage().setTimeouts({ implicit: 30_000 });

    await driver.manage().window().maximize();
    await driver.get('https://obstaclecourse.tricentis.com/Obstacles/73589');

    // await driver.findElement(By.name('q')).sendKeys("selenium javascript is best");

    let bubbleSort_73589 = new BubbleSort_73589(driver);

    try {
        let l = Number.parseInt(await bubbleSort_73589.getLeftBubbleNumber());
        let r = Number.parseInt(await bubbleSort_73589.getRightBubbleNumber());
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                if (l > r) {
                    await bubbleSort_73589.clickSwapButton();
                    console.log(`Swapped: ${l} > ${r}`);
                }
                await new Promise((resolve) => setTimeout(resolve, 200));
                await bubbleSort_73589.clickNextButton();
                await new Promise((resolve) => setTimeout(resolve, 200));
                l = Number.parseInt(await bubbleSort_73589.getLeftBubbleNumber());
                r = Number.parseInt(await bubbleSort_73589.getRightBubbleNumber());
            }
        }
    } catch (err) {
        if (await bubbleSort_73589.isCompleted())
            console.log('Bubble Sort Completed!!!! **not exactly');
        else
            console.log(err);
    }

    await driver.quit();
})();