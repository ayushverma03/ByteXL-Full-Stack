const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(bodyParser.json());

const JWT_SECRET = "myjwtsecret";


const user = {
  username: "ayush",
  password: "12345",
};

// -------------------- ROUTES -------------------- //

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Secure Banking API!");
});

// Login route → generates JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    // Create token with username as payload
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Protected banking route
app.get("/banking", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your banking dashboard!",
    user: req.user, // decoded token info
  });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
