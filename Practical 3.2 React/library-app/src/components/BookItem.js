// src/components/BookItem.js
import React from "react";
import "./BookItem.css";

function BookItem({ book, onRemove }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <button onClick={() => onRemove(book.isbn)}>Remove</button>
    </div>
  );
}

export default BookItem;
