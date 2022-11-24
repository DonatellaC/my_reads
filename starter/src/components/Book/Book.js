import React from "react";
import BookshelfChanger from "../BookshelfChanger/BookshelfChanger";

const Book = ({ book }) => {
  const { imageLinks, title, authors } = book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`,
          }}
        ></div>

        <BookshelfChanger />
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors[0]}</div>
      </div>
    </div>
  );
};

export default Book;
