// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store cards
let cards = [
  { id: 1, suit: "Hearts", value: "A" },
  { id: 2, suit: "Diamonds", value: "10" },
  { id: 3, suit: "Clubs", value: "K" },
];

// Helper to generate next ID
let nextId = 4;

// --- ROUTES ---

// GET all cards
app.get('/cards', (req, res) => {
  res.json(cards);
});

// GET card by ID
app.get('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).send("Card not found");
  res.json(card);
});

// POST a new card
app.post('/cards', (req, res) => {
  const { suit, value } = req.body;
  if (!suit || !value) return res.status(400).send("Suit and value are required");

  const newCard = { id: nextId++, suit, value };
  cards.push(newCard);
  res.status(201).json(newCard);
});

// PUT (update) a card
app.put('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).send("Card not found");

  const { suit, value } = req.body;
  if (suit) card.suit = suit;
  if (value) card.value = value;

  res.json(card);
});

// DELETE a card
app.delete('/cards/:id', (req, res) => {
  const index = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Card not found");

  const removed = cards.splice(index, 1);
  res.json(removed[0]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
`
