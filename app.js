var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var config = require('./config');

require('./models');

require('./config/passport');
var routes = require('./routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use('/', routes);

app.listen(config.PORT, function() {
  console.log('Server started on port ' + config.PORT);
});

module.exports = app;
