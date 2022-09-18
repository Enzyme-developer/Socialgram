const express = require('express')
const router = express.Router()

//register user route
router.post('/register', registerNewUser)

export {}