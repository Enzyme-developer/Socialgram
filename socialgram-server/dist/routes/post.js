"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getSinglePost, deletePost, updatePost, likePost } = require('../controllers/post');
//register user route
router.post('/createpost', createPost);
router.get('/post/:id', getSinglePost);
router.get('/posts', getAllPosts);
router.delete('/post/:id', deletePost);
router.put('/post/:id', updatePost);
router.put('/post/:id/like', likePost);
module.exports = router;
