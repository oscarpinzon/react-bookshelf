import React, { Component } from "react";
import styles from "./LibraryDisplay.module.css";
import BookContainer from "../BookContainer/BookContainer";
import Modal from "../NewBookModal/NewBookModal";
import { v4 as uuidv4 } from "uuid";
import { update } from "ramda";

if (!JSON.parse(localStorage.getItem("books"))) {
  localStorage.setItem("books", JSON.stringify([]));
}

class LibraryDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBookTitle: "",
      newBookAuthor: "",
      newBookReadStatus: false,
      books: [
        { title: "1984", author: "George Orwell", read: true, id: uuidv4() },
        {
          title: "The Gulag Archipielago",
          author: "Aleksandr Solzhenitsyn",
          read: false,
          id: uuidv4(),
        },
        {
          title: "The Gulag Archipielago",
          author: "Aleksandr Solzhenitsyn",
          read: true,
          id: uuidv4(),
        },
      ],
      showModal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.toggleReadStatus = this.toggleReadStatus.bind(this);
  }

  componentDidMount() {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    this.setState({ books: storedBooks });
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
      id: uuidv4(),
    };
    let books = this.state.books;
    books.push(newBook);
    this.setState({ books: books });
    this.hideModal();
    this.setState({ newBookTitle: "" });
    this.setState({ newBookAuthor: "" });
    this.setState({ newBookReadStatus: false });
    console.log(JSON.stringify(this.state.books));
    localStorage.setItem("books", JSON.stringify(this.state.books));
  };

  handleChange(event) {
    const propertyName = event.target.name;
    const value = event.target.value;
    this.setState({ [propertyName]: value });
  }

  handleCheckboxChange(event) {
    this.setState({
      newBookReadStatus: event.target.checked === true ? true : false,
    });
  }

  removeBook(id) {
    const newState = this.state;
    const index = newState.books.findIndex((a) => a.id === id);
    if (index === -1) return;
    newState.books.splice(index, 1);
    this.setState(newState);
    localStorage.setItem("books", JSON.stringify(this.state.books));
  }

  toggleReadStatus(state) {
    const objIndex = this.state.books.findIndex((book) => book.id === state.id);
    this.setState({
      books: update(
        objIndex,
        { ...this.state.books[objIndex], read: state.read },
        this.state.books
      ),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bookContainer}>
          {this.state.books.map((book) => {
            return (
              <BookContainer
                toggleRead={this.toggleReadStatus}
                key={book.id}
                book={book}
                removeBook={this.removeBook.bind(this)}
              />
            );
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
              onChange={this.handleCheckboxChange}
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
