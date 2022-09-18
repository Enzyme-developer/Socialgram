"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomAPIError = require('./CustomError');
const { StatusCodes } = require('http-status-codes');
class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}
module.exports = UnauthenticatedError;
