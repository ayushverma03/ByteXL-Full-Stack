const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

// Protected admin route
router.get('/', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you have admin access!` });
});

module.exports = router;
