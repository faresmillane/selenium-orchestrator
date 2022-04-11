const downloader = require('./downloader');
const config = require('../config/config');
const fs = require('fs-extra');

const updateSeleniumGrid = async () => {
    try {
        fs.remove('./selenium-server.jar');
        downloader.download(config.update.selenium, "selenium-server.jar");
    }
    catch (error) {
        return false;
    };
};

updateSeleniumGrid();


