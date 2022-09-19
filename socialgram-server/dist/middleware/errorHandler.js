"use strict";
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('../errors/CustomError');
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    else {
        console.log(err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};
module.exports = errorHandlerMiddleware;
