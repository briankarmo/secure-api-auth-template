const express = require('express');
const router = express.Router();
const { register, login, dashboard, logout } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', protect, dashboard);
router.post('/logout', protect, logout);


module.exports = router;
