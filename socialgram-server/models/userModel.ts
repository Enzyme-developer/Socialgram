const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    relationShipStatus: {
        type: String,
    },
    worksAt: {
        type: String,
    },
    followers: [],
    followings: []
    },
    
    { timestamps: true }
)


const userModel = mongoose.model('Users', userSchema)

exports.module = userModel