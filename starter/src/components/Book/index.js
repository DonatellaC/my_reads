import React from "react";
import BookShelfChanger from "../../components/BookShelfChanger";

const Book = ({ books }) => {
  return (
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

              <BookShelfChanger />
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors[0]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Book;
