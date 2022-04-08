module.exports = {
    hostname: "http://localhost",
    hubPort: 4444,
    ports: [4444, 4445, 4446, 4447, 4448, 4723],
    nodes: [
        {
            driverName: 'chrome',
            active: true,
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
    ]
};