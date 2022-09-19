const User = require('../models/userModel')
const BadRequestError = require('../errors/Badrequest')
const UnauthenticatedError = require('../errors/Unauthorized')
const bcrypt = require('bcrypt')
require('express-async-errors');


const registerNewUser = async (req: { body: { username: string; firstname: string; lastname: string; password: string } }, res: any) => {
    const { username, firstname, lastname, password } = req.body
    
    if (!username || !password || !firstname || !lastname) {
        throw new BadRequestError('Please provide required credentials')
    } else {
        //hash and salt password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const newUser = new User({ username, firstname, lastname, password: hashedPassword })
        await newUser.save()
        res.status(200).json('user Registered successfully')
    }
}





export {}
module.exports = registerNewUser