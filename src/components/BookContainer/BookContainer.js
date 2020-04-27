import React, { Component } from "react";
import styles from "./BookContainer.module.css";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: this.props.book.read,
      id: this.props.book.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateLibrary = this.updateLibrary.bind(this);
  }

  handleChange() {
    this.setState({ read: !this.state.read }, this.updateLibrary);
  }

  updateLibrary() {
    this.props.toggleRead(this.state);
  }

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
          onChange={this.handleChange}
        />
        <br />
        <button
          className={styles.deleteBtn}
          onClick={() => this.props.removeBook(this.props.book.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default BookContainer;
