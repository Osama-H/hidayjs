// routes
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/auth/AuthController');
const TokenController = require('../controllers/auth/TokenController');
const authenticateToken = TokenController.authenticateToken;

// Routes Auth
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

// Routes User
router.get('/user', authenticateToken, UserController.showUser);

module.exports = router;