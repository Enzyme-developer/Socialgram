"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { registerNewUser, loginUser } = require('../controllers/auth');
//register user route
router.post('/register', registerNewUser);
router.post('/login', loginUser);
module.exports = router;
