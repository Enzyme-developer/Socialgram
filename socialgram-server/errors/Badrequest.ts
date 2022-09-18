const CustomAPIError = require('./CustomError')
const { StatusCodes } = require('http-status-codes')

class BadRequest extends CustomAPIError {
    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export {};
module.exports = BadRequest;
