"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const PostModel = new mongoose.Schema({});
module.exports = mongoose.model('Post', PostModel);
