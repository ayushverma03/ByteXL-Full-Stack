import React, { useState } from "react";
import BookItem from "./BookItem";
import BookForm from "./BookForm";

function BookList() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell", isbn: "12345" },
    { title: "The Alchemist", author: "Paulo Coelho", isbn: "67890" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = (book) => {
    setBooks([...books, book]);
  };

  const handleRemove = (isbn) => {
    setBooks(books.filter((b) => b.isbn !== isbn));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.isbn.includes(searchTerm)
  );

  return (
    <div>
      <BookForm onAdd={handleAdd} />
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredBooks.map((book) => (
          <BookItem key={book.isbn} book={book} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
