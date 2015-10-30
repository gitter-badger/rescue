var config = require('../config');
var mongoose = require('mongoose');
var conn = mongoose.connect(config.MONGO_URL).connection;

mongoose.model('User', require('./Users'));