var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');

var auth = jwt({secret:'SECRET', userProperty: 'payload'});
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
  console.log('ROUTER!!!!', '/');
});

router.get('/home', function(req, res, next) {
  console.log('we are home..');
});

router.post('/register', function(req, res, next) {
  var user = new User();

  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function(err) {
    if(err) {return next(err);}
    return res.json({token:user.generateJWT()});
  });
});

router.post('/login', function(req,res,next) {
  passport.authenticate('local', function(err,user,info) {
    if(err) {return next(err);}

    if(user){
      console.log(user);
      return res.json({token:user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req,res,next);
});

module.exports = router;
