"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const getUser = require('../controllers/user');
router.get('/:id', getUser);
module.exports = router;
