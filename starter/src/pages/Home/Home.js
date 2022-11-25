import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import * as BooksAPI from "../../BooksAPI";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

const Home = () => {
  const [books, setBooks] = useState([]);

  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  //get all books
  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };

    getBooks();
  }, []);

  //move books
  const moveBookBetweenShelves = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  };

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <Bookshelf
          books={currentlyReading}
          bookshelfTitle="Currently Reading"
          moveBookBetweenShelves={moveBookBetweenShelves}
        />
        <Bookshelf
          books={wantToRead}
          bookshelfTitle="Want to Read"
          moveBookBetweenShelves={moveBookBetweenShelves}
        />
        <Bookshelf
          books={read}
          bookshelfTitle="Read"
          moveBookBetweenShelves={moveBookBetweenShelves}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
