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
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../models/userModel');
const BadRequestError = require('../errors/Badrequest');
const UnauthenticatedError = require('../errors/Unauthorized');
const bcrypt = require('bcrypt');
require('express-async-errors');
const registerNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, firstname, lastname, password } = req.body;
    if (!username || !password || !firstname || !lastname) {
        throw new BadRequestError('Please provide required credentials');
    }
    else {
        //hash and salt password
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = yield bcrypt.hash(password, salt);
        const newUser = new User({ username, firstname, lastname, password: hashedPassword });
        yield newUser.save();
        res.status(200).json('user Registered successfully');
    }
});
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError('Please provide required credentials');
    }
    const foundUser = yield User.findOne({ username: username });
    if (foundUser) {
        const isValid = yield bcrypt.compare(password, foundUser.password);
        isValid ? res.status(200).json(foundUser) : res.status(400).json('Wrong Password');
    }
    else {
        throw new UnauthenticatedError('User does not exist');
    }
});
module.exports = { registerNewUser, loginUser };
