const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET_KEY = "your_secret_key";

// Dummy users database
const users = [
  { username: "admin", password: "password", role: "admin" },
  { username: "user", password: "password", role: "user" }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  // Include role in JWT
  const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
