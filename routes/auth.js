var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function register(req, res, next) {
    var user = new User();

    user.username = req.body.username;
    user.setPassword(req.body.password);

    user.save(function(err) {
        if(err) {return next(err);}
        return res.json({token:user.generateJWT()});
    });
}

function login(req,res,next) {
    passport.authenticate('local', function(err,user,info) {
        if(err) {return next(err);}

        if(user){
            console.log(user);
            return res.json({token:user.generateJWT()});
        } else {
            return res.status(401).json(info);
        }
    })(req,res,next);
}

module.exports = {
    "register": register,
    "login": login
};