const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: Number, required: true, unique: true },
  department: String,
  year: Number,
  email: { type: String, unique: true },
});


module.exports = mongoose.model("Student", studentSchema);
