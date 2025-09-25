// src/App.js
import React from "react";
import Product from "./Product";

function App() {
  const products = [
    {
      name: "Apple iPhone 15",
      price: 999,
      description: "Latest iPhone with advanced features",
      image: "https://via.placeholder.com/220x150.png?text=iPhone+15",
    },
    {
      name: "Samsung Galaxy S25",
      price: 899,
      description: "High-end Android smartphone",
      image: "https://via.placeholder.com/220x150.png?text=Galaxy+S25",
    },
    {
      name: "Sony WH-1000XM5",
      price: 350,
      description: "Noise-cancelling wireless headphones",
      image: "https://via.placeholder.com/220x150.png?text=Sony+Headphones",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        minHeight: "100vh", // full page height
        gap: "20px", // space between cards
        backgroundColor: "#f0f2f5", // page background
        padding: "20px",
      }}
    >
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;
