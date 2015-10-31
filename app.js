var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var config = require('./config');
var morgan = require('morgan');
var logger = require('./common/logger');

require('./models');

require('./config/passport');
var routes = require('./routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use('/', routes);

app.use(morgan("combined", { "stream": logger.stream }));

// Error handler
app.use(function (err, req, res, next) {
  logger.error("Error: " + err.name + ": " + err.message, err);
  res.status(err.httpCode || 500).json({
    error: err.message
  });
});

app.listen(config.PORT, function() {
  logger.info('Server started on port ' + config.PORT);
});

module.exports = app;
