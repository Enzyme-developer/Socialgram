"use strict";
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
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
    relationShipStatus: String,
    worksAt: String,
    livesIn: String,
    about: String,
    profilePicture: String,
    coverPicture: String,
    followers: [],
    followings: []
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
