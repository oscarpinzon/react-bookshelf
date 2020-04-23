import React, { Component } from "react";
import styles from "./BookContainer.module.css";

class BookContainer extends Component {
  render() {
    return (
      <div className={styles.bookContainer}>
        <p>Title: {this.props.book.title}</p>
        <p>Author: {this.props.book.author}</p>
        <p>Read: {this.props.book.read}</p>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    );
  }
}

export default BookContainer;
