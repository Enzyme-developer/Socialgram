const express = require('express')
const router = express.Router();
const { getUser, updateUser, deleteUser, followUser, unfollowUser } = require('../controllers/user')


router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)


export {}
module.exports = router