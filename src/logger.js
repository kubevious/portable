var config = {
    pretty: true
}

if (process.env.LOG_TO_FILE) {
    config.enableFile = true;
    config.cleanOnStart = true;
}

const logger = require('the-logger').setup('kubevious-portable', config);
if (process.env.NODE_ENV == 'production') {
    logger.level = 'warn';
} else {
    logger.level = 'debug';
}

module.exports = logger;
