"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    description: String,
    likes: [],
    image: String,
}, { timestamp: true });
module.exports = mongoose.model("Post", PostSchema);
