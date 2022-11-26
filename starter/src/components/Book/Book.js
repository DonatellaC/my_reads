import React from "react";
import BookshelfChanger from "../BookshelfChanger/BookshelfChanger";

const Book = ({ books, book, moveBookBetweenShelves, filteredBoooks }) => {
  const { imageLinks, title, authors } = book;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks?.thumbnail})`,
          }}
        ></div>

        <BookshelfChanger
          books={books}
          book={book}
          moveBookBetweenShelves={moveBookBetweenShelves}
          filteredBoooks={filteredBoooks}
        />
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? authors[0] : ""}</div>
      </div>
    </div>
  );
};

export default Book;
