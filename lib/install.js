const config = require('../config/config');
const fs = require('fs-extra');
const clear = require("./clear");
const { exec } = require('child_process');
let platform = "windows";

const updateDriver = async (driverName, url) => {
    try {
        const extension = driverName === "geckodriver" && platform === "linux" ? '.tar.gz' : '.zip'
        await exec(`sh lib/drivers.sh ${url} ${driverName} ${extension}`);
        console.log(`download and extract from : ${url} ...`);
    }
    catch (error) {
        return false;
    };
};

const updateDrivers = async () => {
    try {
        await updateDriver('geckodriver', config.update.geckodriver[platform]);
        await updateDriver('chromedriver', config.update.chromedriver[platform]);
        await updateDriver('msedgedriver', config.update.msedgedriver[platform]);
    }
    catch (error) {
        return error;
    };
};


fs.existsSync(`drivers`) ? exec(`sh lib/clear.sh "drivers/*"`) : fs.mkdirSync(`drivers`);
fs.existsSync(`tmp`) ? exec(`sh lib/clear.sh "tmp/*"`) : fs.mkdirSync(`tmp`);
updateDrivers();

