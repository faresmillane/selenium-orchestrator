const axios = require("axios").default;
const BASE_URL = "http://localhost:4444/status"

const checkSeleniumStatus = async () => {
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_URL}`,
            headers: {},
            responseType: "stream"
        });
        if (response.status === 200) {
            return true;
        }
    }
    catch (error) {
        return false;
    };
};

module.exports = {
    checkSeleniumStatus
}