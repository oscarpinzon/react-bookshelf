import React, { Component } from "react";
import styles from "./BookContainer.module.css";

class BookContainer extends Component {
  render() {
    return (
      <div className={styles.bookContainer}>
        <p className={styles.header}>Title </p>
        <p className={styles.paragraph}>{this.props.book.title}</p>
        <br />
        <p className={styles.header}>Author </p>
        <p className={styles.paragraph}>{this.props.book.author}</p>
        <br />
        <p className={styles.header}>Read</p>
        <input
          type="checkbox"
          className={styles.readCheck}
          checked={this.props.book.read}
          readOnly
        />
        <p className={styles.paragraph}>{this.props.book.read.toString()}</p>
        <br />
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    );
  }
}

export default BookContainer;
