const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/CustomError')

const errorHandlerMiddleware = (err: { statusCode: any; message: any }, req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: any): any; new(): any } } }, next: any) => {
    if (err instanceof CustomAPIError) {
       return res.status(err.statusCode).json({msg: err.message}) 
    }else {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong, please try again.') 
    }
}

module.exports = errorHandlerMiddleware;