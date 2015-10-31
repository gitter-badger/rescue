var config = require('../config');
var mongoose = require('mongoose');

mongoose.model('User', require('./Users'));