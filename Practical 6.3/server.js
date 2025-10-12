const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Account = require("./models/account");

const app = express();
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/money_transfer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("DB connection error:", err));


// ---------------------- ROUTES ---------------------------------


app.post("/accounts", async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get("/accounts", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});


app.post("/transfer", async (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || !amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid transfer details" });
  }

  try {
    const sender = await Account.findOne({ name: from });
    const receiver = await Account.findOne({ name: to });

    if (!sender || !receiver) {
      return res.status(404).json({ error: "Sender or receiver not found" });
    }

    if (sender.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }


    sender.balance -= amount;
    await sender.save();

    
    receiver.balance += amount;
    await receiver.save();

    res.json({
      message: "Transfer successful",
      from: sender.name,
      to: receiver.name,
      amount,
    });
  } catch (err) {
    console.error("❌ Error during transfer:", err.message);

  
    const { from, amount } = req.body;
    const sender = await Account.findOne({ name: from });
    if (sender && sender.balance >= 0) {
      sender.balance += amount; // refund
      await sender.save();
    }

    res.status(500).json({ error: "Transfer failed. Rolled back changes." });
  }
});

// ---------------------------------------------------- //
// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
