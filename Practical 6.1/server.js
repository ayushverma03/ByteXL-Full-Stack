const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");

const app = express();
app.use(bodyParser.json());


app.use(logger);


app.get("/", (req, res) => {
  res.send("Welcome to Middleware Demo!");
});


app.get("/secret", auth, (req, res) => {
  res.json({ message: "🎉 Access granted! This is a protected route." });
});


app.post("/data", auth, (req, res) => {
  res.json({ message: "✅ Data received securely.", data: req.body });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
