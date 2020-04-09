const chalk = require("chalk")

const logger = {

    log: (msg = '') => {
        console.log(msg);
    },
    error: (msg, log = '') => {
        console.log(chalk.red.bold("ERROR: ") + msg + ' %s ', chalk.blue.bold(log));
    },
    warn: (msg, log = '') => {
        console.log(chalk.yellowBright.bold("WARNING: ") + msg + ' %s ', chalk.blue.bold(log));
    },
    info: (msg, log = '') => {
        console.log(chalk.cyan.bold("INFO: ") + msg + ' %s ', chalk.green.bold(log));
    }
}

module.exports = logger;