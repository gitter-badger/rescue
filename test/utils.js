// Just require this in every mongoose test file to clean and initialize the db
var config = require('../config');
var mongoose = require('mongoose');

beforeEach(function (done) {

    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function() {});
        }
        return done();
    }

    if (mongoose.connection.readyState === 0) {
        mongoose.connect(config.TESTS.MONGODB, function (err) {
            if (err) {
                throw err;
            }
            return clearDB();
        });
    } else {
        return clearDB();
    }
});

afterEach(function (done) {
    mongoose.disconnect();
    return done();
});