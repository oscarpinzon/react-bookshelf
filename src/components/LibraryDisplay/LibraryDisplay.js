import React, { Component } from "react";
import styles from "./LibraryDisplay.module.css";

const books = [
  { title: "1984", author: "George Orwell", read: true },
  {
    title: "The Gulag Archipielago",
    author: "Aleksandr Solzhenitsyn",
    read: false,
  },
];

class LibraryDisplay extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.mainHeader}>My Library</h1>
        <div className={styles.bookContainer}>
          <p>Books</p>
          <p>Books</p>
          <p>Books</p>
        </div>
        <button className={styles.newBookBtn} type="submit">
          Add Book
        </button>
      </div>
    );
  }
}

export default LibraryDisplay;
