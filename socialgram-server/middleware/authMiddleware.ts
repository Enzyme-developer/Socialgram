const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
require('express-async-errors');
const UnauthenticatedError = require('../errors/Unauthorized')


const protect = async (req: { headers: { authorization: string; }; user: any; }, res: any, next: () => void) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //get user from token
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            throw new UnauthenticatedError('unauthorized access')
        }
    }

    if (!token) {
        throw new UnauthenticatedError('unauthorized access')
    }
}


export {}
module.exports = { protect }