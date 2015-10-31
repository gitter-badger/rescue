var express = require('express');
var router = express.Router();
var home = require('./home');
var auth = require('./auth');
var jwt = require('jsonwebtoken');
var config = require('../config');
var UnauthorizedError = require('../common/errors').UnauthorizedError;
var ForbiddenError = require('../common/errors').ForbiddenError;

var routes = [
    {"path": "/",           "method": "get",    "controller": home.index, "public": true},
    {"path": "/home",       "method": "get",    "controller": home.home, "public": true},
    {"path": "/login",      "method": "post",   "controller": auth.login, "public": true},
    {"path": "/register",   "method": "post",   "controller": auth.register, "public": true},
    {"path": "/home_fail",  "method": "get",    "controller": home.home, "public": false}
];

routes.forEach(function(item) {
    router[item.method](item.path, [
        function(req, res, next) {
            if(item.public) {
                return next();
            } else {
                try {
                    var token = jwt.verify(req.get('Authorization'), config.SECRET);
                    if(item.roles && item.roles.indexOf(token.role) < 0) {
                        // User doesn't have required role
                        return next(new ForbiddenError());
                    }
                    return next();
                } catch(e) {
                    return next(new UnauthorizedError);
                }
            }
            // We should never reach this point
        },
        item.controller
    ]);
});

module.exports = router;