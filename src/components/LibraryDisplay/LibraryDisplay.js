import React, { Component } from "react";
import styles from "./LibraryDisplay.module.css";
import BookContainer from "../BookContainer/BookContainer";

class LibraryDisplay extends Component {
  render() {
    const books = [
      { title: "1984", author: "George Orwell", read: true },
      {
        title: "The Gulag Archipielago",
        author: "Aleksandr Solzhenitsyn",
        read: false,
      },
      {
        title: "The Gulag Archipielago",
        author: "Aleksandr Solzhenitsyn",
        read: false,
      },
      {
        title: "The Gulag Archipielago",
        author: "Aleksandr Solzhenitsyn",
        read: false,
      },
      {
        title: "The Gulag Archipielago",
        author: "Aleksandr Solzhenitsyn",
        read: false,
      },
      {
        title: "The Gulag Archipielago",
        author: "Aleksandr Solzhenitsyn",
        read: false,
      },
    ];
    return (
      <div className={styles.container}>
        <h1 className={styles.mainHeader}>Library</h1>
        <div className={styles.bookContainer}>
          {books.map((book, index) => {
            return <BookContainer key={index} book={book} />;
          })}
        </div>
        <button className={styles.newBookBtn} type="submit">
          Add Book
        </button>
      </div>
    );
  }
}

export default LibraryDisplay;
