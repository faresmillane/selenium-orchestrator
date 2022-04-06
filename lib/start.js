const { exec } = require('child_process');
const clear = require("./clear");
const status = require("./status");

async function sleep(milliseconds)  {
    return await new Promise(resolve => setTimeout(resolve, milliseconds));
  }

const start = async () => {
    try {
        var platform = await clear.getPlatform();
        await clear.clearAvailabilityPorts();
        await exec(`chmod 777 drivers/chromedriver drivers/geckodriver`);
        await exec(`java -jar ./selenium-server.jar hub --port 4444 &`);
        await sleep(2000);
        await exec(`java -jar ./selenium-server.jar node --config ./config/${platform}/chrome-node.toml &`);
        await sleep(2000);
        await exec(`java -jar ./selenium-server.jar node --config ./config/${platform}/firefox-node.toml &`);
        await sleep(2000);
        while (await status.checkSeleniumStatus() != true) {
            await sleep(200);;
        };
        console.log('\x1b[36m%s\x1b[0m', "-> selenium started : http://localhost:4444/ui/index.html ...")
    }
    catch (error) {
        return false;
    };
};

start();
module.exports = { start }