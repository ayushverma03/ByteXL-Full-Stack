// src/components/BookForm.js
import React, { useState } from "react";
import "./BookForm.css";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !isbn) return;

    onAdd({ title, author, isbn });
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
