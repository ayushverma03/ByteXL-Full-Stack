const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const users = [
  { id: 1, name: "Ayush", email: "ayush@example.com" },
  { id: 2, name: "Rohan", email: "rohan@example.com" },
  { id: 3, name: "Priya", email: "priya@example.com" }
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
