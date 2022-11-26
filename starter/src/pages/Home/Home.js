import { Link } from "react-router-dom";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

const Home = ({ books, moveBookBetweenShelves }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          books={currentlyReading}
          bookshelfTitle="Currently Reading"
          moveBookBetweenShelves={moveBookBetweenShelves}
        />
        <Bookshelf
          books={wantToRead}
          bookshelfTitle="Want to Read"
          moveBookBetweenShelves={moveBookBetweenShelves}
        />
        <Bookshelf
          books={read}
          bookshelfTitle="Read"
          moveBookBetweenShelves={moveBookBetweenShelves}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
