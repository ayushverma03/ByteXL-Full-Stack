const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number,
  price: Number,
});


const reviewSchema = new mongoose.Schema({
  user: String,
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  date: { type: Date, default: Date.now },
});


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  description: String,
  basePrice: Number,
  category: categorySchema,    
  variants: [variantSchema],   
  reviews: [reviewSchema],    
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
