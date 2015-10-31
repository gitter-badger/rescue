var passport = require('passport');
var mongoose = require('mongoose');
var logger = require('../common/logger');
var validator = require('../common/validator');
var errors = require('../common/errors');
var User = mongoose.model('User');

function register(req, res, next) {
    validator("register", {
        username: req.body.username,
        password: req.body.password
    }, {
        username: String,
        password: String
    });
    logger.info("Entering register method");
    var user = new User();

    user.username = req.body.username;
    user.setPassword(req.body.password);

    user.save(function(err) {
        if(err) return next(err);
        return res.json({token:user.generateJWT()});
    });
}

function login(req, res, next) {
    validator("register", {
        username: req.body.username,
        password: req.body.password
    }, {
        username: String,
        password: String
    });
    logger.info("Entering login method");
    passport.authenticate('local', function(err, user, info) {
        if(err) {return next(err);}

        if(user){
            logger.info("Authentication successful");
            return res.json({token:user.generateJWT()});
        } else {
            return next(new errors.UnauthorizedError());
        }
    })(req, res, next);
}

module.exports = {
    "register": register,
    "login": login
};