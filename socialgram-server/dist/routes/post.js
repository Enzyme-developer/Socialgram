"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { createPost, getTimelinePosts, getSinglePost, deletePost, updatePost, likePost } = require('../controllers/post');
const { protect } = require('../middleware/authMiddleware');
//register user route
router.post('/createpost', protect, createPost);
router.get('/post/:id', protect, getSinglePost);
router.get('/:id/timeline', protect, getTimelinePosts);
router.delete('/post/:id', protect, deletePost);
router.put('/post/:id', protect, updatePost);
router.put('/post/:id/like', protect, likePost);
module.exports = router;
