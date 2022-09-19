const User= require('../models/userModel')
const BadRequestError = require('../errors/Badrequest')

const getUser = async (req: { params: { id: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } } }) => {
    const id = req.params.id
    //check if id exist

    const foundUser = await User.findById(id)
    if (foundUser) {
        const { password, ...otherDetails } = foundUser._doc
        res.status(200).json(otherDetails)
    } else {
        throw new BadRequestError('User not found')
    }
}


export {}
module.exports = getUser