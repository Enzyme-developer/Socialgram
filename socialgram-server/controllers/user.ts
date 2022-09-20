const User= require('../models/userModel')
const BadRequestError = require('../errors/Badrequest')
const UnauthenticatedError = require('../errors/Unauthorized')
const bcrypt = require('bcrypt')


//get user
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


//update user
const updateUser = async (req: { params: { id: string; }; body: { currentUserId: string; currentUserIsAdmin: boolean; password: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } } }) => {
    const id: string = req.params.id
    const { currentUserId, currentUserIsAdmin, password } = req.body
    
    if (id == currentUserId || currentUserIsAdmin) {
        //update new password
        if (password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await  bcrypt.hash(password, salt)
        }
        const foundUserToUpdate = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators: true,})
        if (foundUserToUpdate) {
            res.status(200).json(foundUserToUpdate)
        }
    } else {
        throw new UnauthenticatedError('Unauthorized user')
    }
}


//delete user
const deleteUser = async (req: { params: { id: string }; body: { currentUserId: string; currentUserIsAdmin: string; password: string } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any } } }) => {
    const id = req.params.id
    const { currentUserId, currentUserIsAdmin } = req.body

    //check if user is the owner of the account or if user is an admin
    if (id == currentUserId || currentUserIsAdmin) {
        const foundUserToDelete = await User.findByIdAndRemove(id)
        if (foundUserToDelete) {
            res.status(200).json('User deleted successfully')
        }
    } else {
        throw new UnauthenticatedError('Unauthorized user')
    }

}


//follow a user
const followUser = async (req: { params: { id: string }; body: { currentUserId: string } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any }; send: { (arg0: string): void; new(): any } } }) => {
    //id of user to be followed
    const id = req.params.id
    //id of current user 
    const { currentUserId } = req.body
    
    if (id === currentUserId) {
        res.status(403).json('Action Forbidden')
    } else {
        const followed = await User.findById(id)
        const follower = await User.findById(currentUserId)

        //update the follower and followed arrays of followers and follows
        if (!followed.followers.includes(currentUserId)) {
            await followed.updateOne({$push : {followers : currentUserId } })
            await follower.updateOne({ $push: { followings : id } })
            res.status(200).send('User followed succesfully')
        } else {
            res.status(403).send('User is already followed')
        }
    }

}


module.exports = { getUser, updateUser, deleteUser, followUser }