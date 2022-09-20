"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const User = require('../models/userModel');
const BadRequestError = require('../errors/Badrequest');
const UnauthenticatedError = require('../errors/Unauthorized');
const bcrypt = require('bcrypt');
//get user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    //check if id exist
    const foundUser = yield User.findById(id);
    if (foundUser) {
        const _a = foundUser._doc, { password } = _a, otherDetails = __rest(_a, ["password"]);
        res.status(200).json(otherDetails);
    }
    else {
        throw new BadRequestError('User not found');
    }
});
//update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { currentUserId, currentUserIsAdmin, password } = req.body;
    if (id == currentUserId || currentUserIsAdmin) {
        //update new password
        if (password) {
            const salt = yield bcrypt.genSalt(10);
            req.body.password = yield bcrypt.hash(password, salt);
        }
        const foundUserToUpdate = yield User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, });
        if (foundUserToUpdate) {
            res.status(200).json(foundUserToUpdate);
        }
    }
    else {
        throw new UnauthenticatedError('Unauthorized user');
    }
});
//delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { currentUserId, currentUserIsAdmin } = req.body;
    //check if user is the owner of the account or if user is an admin
    if (id == currentUserId || currentUserIsAdmin) {
        const foundUserToDelete = yield User.findByIdAndRemove(id);
        if (foundUserToDelete) {
            res.status(200).json('User deleted successfully');
        }
    }
    else {
        throw new UnauthenticatedError('Unauthorized user');
    }
});
//follow a user
const followUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //id of user to be followed
    const id = req.params.id;
    //id of current user 
    const { currentUserId } = req.body;
    if (id === currentUserId) {
        res.status(403).json('Action Forbidden');
    }
    else {
        const followed = yield User.findById(id);
        const follower = yield User.findById(currentUserId);
        //update the follower and followed arrays of followers and follows
        if (!followed.followers.includes(currentUserId) && !follower.followings.includes(id)) {
            yield followed.updateOne({ $push: { followers: currentUserId } });
            yield follower.updateOne({ $push: { followings: id } });
            res.status(200).send('User followed succesfully');
        }
        else {
            res.status(403).send('User is already followed');
        }
    }
});
//unfollow user
//follow a user
const unfollowUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //id of user to be followed
    const id = req.params.id;
    //id of current user 
    const { currentUserId } = req.body;
    if (id === currentUserId) {
        res.status(403).json('Action Forbidden');
    }
    else {
        const followed = yield User.findById(id);
        const follower = yield User.findById(currentUserId);
        //update the follower and followed arrays of followers and follows
        if (followed.followers.includes(currentUserId) && follower.followings.includes(id)) {
            yield followed.updateOne({ $pull: { followers: currentUserId } });
            yield follower.updateOne({ $pull: { followings: id } });
            res.status(200).send('User unfollowed succesfully');
        }
        else {
            res.status(403).send('You do not follow this user');
        }
    }
});
module.exports = { getUser, updateUser, deleteUser, followUser, unfollowUser };
