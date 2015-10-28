var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rescue');

require('./models/Users.js');
require('./config/passport');
var routes = require('./routes/routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));
app.use(passport.initialize());
app.use('/', routes);

app.listen('7000', function() {
  console.log('Server started on port 7000!');
});

module.exports = app;
