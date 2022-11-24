import React from "react";
import Book from "../../components/Book";

const Bookshelf = ({ books, bookshelfTitle }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((books) => (
            <Book key={books.id} {...books} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
