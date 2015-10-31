// Make sure the schema is loaded
require("../../models");
var mongoose = require('mongoose');
var utils = require('../utils');
var should = require('should');
var User = mongoose.model('User');
var roles = require('../../config/constants').roles;

describe('Users: models', function () {

    describe('#create()', function () {
        it('should create a new User', function (done) {
            var user = new User();

            user.username = "test";
            user.role = roles.RESCUER;
            user.setPassword("Password");

            user.save(function(err, createdUser) {
                // Confirm that that an error does not exist
                should.not.exist(err);
                // verify that the returned user is what we expect
                createdUser.username.should.equal('test');
                createdUser.role.should.equal(roles.RESCUER);
                createdUser.validPassword("Password").should.equal(true);
                // Call done to tell mocha that we are done with this test
                done();
            });
        });
    });

});