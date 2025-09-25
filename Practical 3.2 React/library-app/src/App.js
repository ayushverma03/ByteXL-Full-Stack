// src/App.js
import React from "react";
import BookList from "./components/BookList"; // make sure the path matches
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Library Management</h1>
      <BookList />
    </div>
  );
}

export default App;
