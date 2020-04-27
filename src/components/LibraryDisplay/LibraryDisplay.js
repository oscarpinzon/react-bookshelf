import React, { Component } from "react";
import styles from "./LibraryDisplay.module.css";
import BookContainer from "../BookContainer/BookContainer";
import Modal from "../NewBookModal/NewBookModal";

class LibraryDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBookTitle: "",
      newBookAuthor: "",
      newBookReadStatus: false,
      books: [
        { title: "1984", author: "George Orwell", read: true },
        {
          title: "The Gulag Archipielago",
          author: "Aleksandr Solzhenitsyn",
          read: false,
        },
        {
          title: "The Gulag Archipielago",
          author: "Aleksandr Solzhenitsyn",
          read: true,
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
          read: true,
        },
      ],
      showModal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: this.state.newBookTitle,
      author: this.state.newBookAuthor,
      read: this.state.newBookReadStatus,
    };
    console.log(newBook);
    let books = this.state.books;
    books.push(newBook);
    this.setState({ books: books });
  };

  handleChange(event) {
    const propertyName = event.target.name;
    const value = event.target.value;
    this.setState({ [propertyName]: value });
  }

  handleCheckbox(event) {
    this.setState({
      newBookReadStatus: event.target.checked === true ? true : false,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bookContainer}>
          {this.state.books.map((book, index) => {
            return <BookContainer key={index} book={book} />;
          })}
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="newBookTitle"
              value={this.state.newBookTitle}
              onChange={this.handleChange}
              required
            ></input>
            <br />
            <label>Author</label>
            <br />
            <input
              type="text"
              name="newBookAuthor"
              value={this.state.newBookAuthor}
              onChange={this.handleChange}
              required
            ></input>
            <br />
            <label>Read</label>
            <br />
            <input
              type="checkbox"
              name="newBookReadStatus"
              checked={this.state.newBookReadStatus}
              onChange={this.handleCheckbox}
            ></input>
            <br />
            <input type="submit" value="Submit" className="submit"></input>
          </form>
        </Modal>
        <button
          className={styles.newBookBtn}
          onClick={this.showModal}
          type="button"
        >
          Add Book
        </button>
      </div>
    );
  }
}

export default LibraryDisplay;
