const User = require('../models/userModel')
const UnauthenticatedError = require('../errors/Unauthorized')
const BadRequestError = require('../errors/Badrequest')
const bcrypt = require('bcrypt')
require('express-async-errors');

const loginUser = async (req: { body: { username: string; password: string } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { foundUser: any } | string): any; new(): any } } }) => {
    const { username, password } = req.body

    if (!username || !password) {
        throw new BadRequestError('Please provide required credentials')
    } 

    const foundUser = await User.findOne({ username: username })
    
    if (foundUser) {
        const isValid = await bcrypt.compare(password, foundUser.password)
        isValid ? res.status(200).json(foundUser) : res.status(400).json('Wrong Password')
    } else {
        throw new UnauthenticatedError('User does not exist')
    }
}

export { }
module.exports = loginUser
