const express = require('express')
const router = express.Router()
const registerNewUser = require('../controllers/register')
const loginUser = require('../controllers/login')


//register user route
router.post('/register', registerNewUser)
router.post('/login', loginUser)

export {}
module.exports = router