"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const registerNewUser = require('../controllers/register');
const loginUser = require('../controllers/login');
//register user route
router.post('/register', registerNewUser);
router.post('/login', loginUser);
module.exports = router;
