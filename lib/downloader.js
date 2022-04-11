const fs = require('fs-extra');
const axios = require('axios'); 

const download = async (fileUrl, fileDestination) => {
    try {
        axios.get(fileUrl, {responseType: "stream"} )  
        .then(response => {  
            response.data.pipe(fs.createWriteStream(fileDestination));  
        })  
            .catch(error => {  
            console.log(error);  
        });
    }
    catch (error) {
        console.error(`download Error: ${error}`);
    };
};

module.exports = { download }
  