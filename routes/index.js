var express = require('express');
var router = express.Router();
var home = require('./home');
var auth = require('./auth');

var routes = [
    {"path": "/",           "method": "get",    "controller": home.index, "public": true},
    {"path": "/home",       "method": "get",    "controller": home.home, "public": true},
    {"path": "/login",      "method": "post",   "controller": auth.login, "public": true},
    {"path": "/register",   "method": "post",   "controller": auth.register, "public": true}
];

routes.forEach(function(item) {
    router[item.method](item.path, [
        function(req, res, next) {
            if(item.public) {
                next();
            } else {
                // jwt verification here can simply be extended to a role based scheme
            }
        },
        item.controller
    ]);
});

module.exports = router;