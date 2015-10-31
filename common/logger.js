var winston = require('winston');
var config = require("../config");
var path = require("path");

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: config.LOGS.LOG_LEVEL
        }),
        new (winston.transports.File)({
            filename: path.join(__dirname, config.LOGS.LOG_PATH),
            level: config.LOGS.LOG_LEVEL
        })
    ]
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

module.exports = logger;