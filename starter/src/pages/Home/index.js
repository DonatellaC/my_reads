import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelfChanger from "../../components/BookShelfChanger";
import Header from "../../components/Header";
import * as BooksAPI from "../../BooksAPI";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };

    getBooks();
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
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
                  <div className="book">
                    <div className="book-top">
                      {books.map((book) => {
                        const { id, imageLinks, title, shelf, authors } = book;
                        return (
                          <div key={id}>
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${imageLinks.thumbnail})`,
                              }}
                            ></div>
                            <BookShelfChanger
                              handleChange={handleChange}
                              selectedOption={selectedOption}
                            />
                            <div className="book-title">{title}</div>
                            <div className="book-authors">{authors[0]}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
