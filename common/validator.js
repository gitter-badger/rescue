var validator = require('rox').validator;
var ValidationError = require('./errors').ValidationError;

function validate( prefix, input, definition) {
    var error = validator.validate(prefix, input, definition);
    if (!error) {
        return;
    }
    throw new ValidationError(error.message);
}

// TODO Space to add custom object definitions

module.exports = validate;