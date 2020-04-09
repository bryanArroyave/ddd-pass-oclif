const path = require("path")

const getSchema = () => {

    return `
require("dotenv").config();

const PRODUCTION = require("./production");
const DEVELOPMENT = require("./development");
const QA = require("./qa");
const { NODE_ENV } =  "development";  /*you can use an environment variable to configure this*/

let currentEnv = DEVELOPMENT;

if (NODE_ENV === "production") {
    currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
    currentEnv = QA;
}

module.exports = currentEnv;
`

}

const getPath = () => {

    return path.join('config', 'index.js')
}

module.exports = {
    getSchema,
    getPath
};
