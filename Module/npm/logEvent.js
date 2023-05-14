const { format } = require("date-fns");
const uuid = require("uuid");

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvent = async (message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logTime = `${dateTime}\t${uuid}\t${message}`;
    console.log(logTime)

    try {
        await fsPromises.appendFile(path.join(__dirname, 'evenLog.txt'), logTime)
    } catch (error) {
        console.error(error)
    }
}

module.exports = logEvent;
// console.log(format(new Date(), "yyyyMMdd"));

