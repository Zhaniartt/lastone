const express = require('express');
const googleAuthController = require('../controllers/googleAuthController');
const { register, login, logout } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/google', googleAuthController.signInWithGoogle);

module.exports = router;