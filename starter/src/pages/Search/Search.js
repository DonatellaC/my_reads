import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import Book from "../../components/Book/Book";

const Search = (books, moveBookBetweenShelves) => {
  const [searchBooks, setSearchBooks] = useState("");
  const [getBooks, setGetBooks] = useState([]);

  //search books
  useEffect(() => {
    if (searchBooks) {
      BooksAPI.search(searchBooks).then((result) => {
        setGetBooks(result);
      });
    }
  }, [searchBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchBooks}
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setSearchBooks(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {getBooks.map((b) => (
            <li key={b.id}>
              <Book book={b} moveBookBetweenShelves={moveBookBetweenShelves} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
