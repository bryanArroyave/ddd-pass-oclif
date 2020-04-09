const fs = require("fs");
const path = require("path");

module.exports = {}

fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('index.js') === -1)
    .forEach(file => {
        module.exports[file.replace('-handdler.js', '')] = require(path.resolve(__dirname, file));
    })

module.exports.default = module.exports;