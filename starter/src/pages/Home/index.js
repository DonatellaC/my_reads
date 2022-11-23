import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import * as BooksAPI from "../../BooksAPI";
import Book from "../../components/Book";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };

    getBooks();
  }, []);

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <Book books={books} />
                </li>
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
