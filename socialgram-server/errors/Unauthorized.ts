const CustomAPIError = require('./CustomError')
const { StatusCodes } = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export {};
module.exports = UnauthenticatedError