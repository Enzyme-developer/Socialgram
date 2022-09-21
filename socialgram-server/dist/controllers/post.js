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
const Post = require('../models/postModel');
const User = require('../models/userModel');
const UnauthenticatedError = require('../errors/Unauthorized');
const BadRequestError = require('../errors/Badrequest');
const mongoose = require('mongoose');
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post.create(req.body);
    res.status(200).json('post created');
});
const getTimelinePosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const currentUserPosts = yield Post.find({ userId: userId });
    const followingPosts = yield User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: 'posts',
                localField: 'followings',
                foreignField: 'userId',
                as: 'followingPosts'
            }
        },
        {
            $project: {
                followingPosts: 1,
                _id: 0
            }
        }
    ]);
    res.status(200).json(currentUserPosts.concat(followingPosts[0].followingPosts)
        .sort((a, b) => { return b.createdAt - a.createdAt; }));
});
const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (id) {
        const singlePost = yield Post.findById(id);
        res.status(200).json(singlePost);
    }
    else {
        res.status(404).json('post not found');
    }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { userId } = req.body;
    const post = yield Post.findById(id);
    if (post.userId == userId) {
        yield post.updateOne({ $set: req.body });
        res.status(200).json('update successeful');
    }
    else {
        throw new UnauthenticatedError('Unauthorized access');
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { userId } = req.body;
    const post = yield Post.findById(id);
    if (post) {
        if (post.userId == userId) {
            yield post.deleteOne();
            res.status(200).json('delete successeful');
        }
        else {
            throw new UnauthenticatedError('Unauthorized access');
        }
    }
    else {
        throw new BadRequestError('No post matches');
    }
});
//like/dislike a post 
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { userId } = req.body;
    if (userId) {
        const post = yield Post.findById(id);
        if (!post.likes.includes(userId)) {
            yield post.updateOne({ $push: { likes: userId } });
            res.status(200).json('post liked');
        }
        else {
            yield post.updateOne({ $pull: { likes: userId } });
            res.status(200).json('post unliked');
        }
    }
    else {
        throw new BadRequestError('Not a user');
    }
});
module.exports = { createPost, getSinglePost, getTimelinePosts, deletePost, updatePost, likePost };
