const express = require('express')
const router = express.Router()
const { createPost, getTimelinePosts, getSinglePost, deletePost, updatePost, likePost } = require('../controllers/post')


//register user route
router.post('/createpost', createPost)
router.get('/post/:id', getSinglePost)
router.get('/:id/timeline', getTimelinePosts)
router.delete('/post/:id', deletePost)
router.put('/post/:id', updatePost)
router.put('/post/:id/like', likePost)


export {}
module.exports = router