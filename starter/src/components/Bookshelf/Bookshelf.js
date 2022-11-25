import React from "react";
import Book from "../Book/Book";

const Bookshelf = ({ books, bookshelfTitle, moveBookBetweenShelves }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.id}>
              <Book book={b} moveBookBetweenShelves={moveBookBetweenShelves} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
