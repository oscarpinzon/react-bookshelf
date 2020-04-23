import React from "react";
import "./LibraryDisplay.css";

const books = [
  { title: "1984", author: "George Orwell", read: true },
  {
    title: "The Gulag Archipielago",
    author: "Aleksandr Solzhenitsyn",
    read: false,
  },
];

class LibraryDisplay extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="main-header">My Library</h1>
        <div className="book-container">
          <p>Books</p>
          <p>Books</p>
          <p>Books</p>
        </div>
        <button className="new-book-btn" type="submit">
          Add Book
        </button>
      </div>
    );
  }
}

export default LibraryDisplay;
