const { exec } = require('child_process');
const clear = require("./clear");
const status = require("./status");

async function sleep(milliseconds)  {
    return await new Promise(resolve => setTimeout(resolve, milliseconds));
  }

const start = async () => {
    try {
        var platform = await clear.getPlatform();
        clear.clearAvailabilityPorts();
        await exec(`chmod 777 drivers/chromedriver drivers/geckodriver`);
        await exec(`java -jar ./selenium-server-4.1.2.jar hub --port 4444 &`);
        await sleep(2000);
        await exec(`java -jar ./selenium-server-4.1.2.jar node --config ./config/${platform}/chrome-node.toml &`);
        await sleep(2000);
        await exec(`java -jar ./selenium-server-4.1.2.jar node --config ./config/${platform}/firefox-node.toml &`);
        await sleep(2000);
        const seleniumStarted = await status.checkSeleniumStatus();
        if (seleniumStarted === true) {
            console.log("selenium started : http://localhost:4444/ui/index.html ...")
        };
    }
    catch (error) {
        return false;
    };
};

//start();
module.exports = { start }