import React from "react";
import BookShelfChanger from "../../components/BookShelfChanger";

const Book = ({ ...books }) => {
  const { imageLinks, title, authors } = books;
  return (
    <li>
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

          <BookShelfChanger />
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors[0]}</div>
        </div>
      </div>
    </li>
  );
};

export default Book;
