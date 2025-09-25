// src/Product.js
import React from "react";
import "./Product.css";

function Product({ name, price, description, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

export default Product;
