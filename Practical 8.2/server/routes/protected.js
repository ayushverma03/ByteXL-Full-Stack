const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Protected route example
router.get('/', verifyToken, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you accessed a protected route!` });
});

module.exports = router;
