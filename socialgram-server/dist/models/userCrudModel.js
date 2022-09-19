"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const UserCrud = new mongoose.Schema({});
module.exports = mongoose.model('usercrud', UserCrud);
