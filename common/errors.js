var util = require('util');

function _newError(name, httpCode) {
    function ErrorConstructor(message) {
        // See http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
        this.name = name;
        // make name optional
        this.message = message || name;
        this.httpCode = httpCode;
        this.stack = (new Error()).stack;
    }

    util.inherits(ErrorConstructor, Error);
    return ErrorConstructor;
}

module.exports = {
    ValidationError: _newError("ValidationError", 400),
    BadRequestError: _newError("BadRequestError", 400),
    EntityNotFoundError: _newError("NotFoundError", 404),
    ForbiddenError: _newError("ForbiddenError", 403),
    UnauthorizedError: _newError("UnauthorizedError", 401)
};