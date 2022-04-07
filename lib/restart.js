const status = require("./status");
const server = require("./server");

const checkSeleniumStatus = async () => {
if (await status.checkSeleniumStatus() != true) {
    await server.start();
} else {
    console.log('\x1b[36m%s\x1b[0m', "-> selenium server is running correctly : http://localhost:4444/ui/index.html")
};
};

checkSeleniumStatus();