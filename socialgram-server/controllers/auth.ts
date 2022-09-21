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




export {}
module.exports = { registerNewUser, loginUser }