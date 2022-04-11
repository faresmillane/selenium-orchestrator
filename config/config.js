module.exports = {
    hostname: "http://localhost",
    hubPort: 4444,
    ports: [4444, 4445, 4446, 4447, 4448, 4723],
    nodes: [
        {
            driverName: 'chrome',
            active: false,
            port: 4445,
        },
        {
            driverName: 'firefox',
            active: true,
            port: 4446,
        },
        {
            driverName: 'edge',
            active: false,
            port: 4447,
        },
        {
            driverName: 'appium',
            active: false,
            port: 4448,
        },
    ],
    update: {
        selenium: 'https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.1.0/selenium-server-4.1.3.jar',
        chrome: {
            windows: '',
            linux: '',
        },
        firefox: {
            windows: 'https://github.com/mozilla/geckodriver/releases/download/v0.31.0/geckodriver-v0.31.0-win64.zip',
            linux: 'https://github.com/mozilla/geckodriver/releases/download/v0.31.0/geckodriver-v0.31.0-linux64.tar.gz'
        }

    }
};