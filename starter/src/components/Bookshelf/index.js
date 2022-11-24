import React from "react";
import Book from "../../components/Book";

const Bookshelf = ({ books, bookshelfTitle }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book books={books} />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
