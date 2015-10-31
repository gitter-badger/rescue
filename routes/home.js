var logger = require('../common/logger');

function index(req, res, next) {
    logger.debug('ROUTER!!!!', '/');
}

function home(req, res, next) {
    logger.debug('we are home..');
}

module.exports = {
    "index": index,
    "home": home
};
