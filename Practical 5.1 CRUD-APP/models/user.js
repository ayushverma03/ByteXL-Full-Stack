const mongoose = require("mongoose");

// Define the schema (blueprint of data)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },        
  email: { type: String, required: true, unique: true }, 
  age: Number                                    
});


module.exports = mongoose.model("User", userSchema);
