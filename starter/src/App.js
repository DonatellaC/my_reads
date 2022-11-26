import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  //get all books
  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };

    getBooks();
  }, []);

  //move books
  const moveBookBetweenShelves = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((result) => {
      setBooks(result);
    });
  };

  return (
    <Routes className="app">
      <Route
        exact
        path="/"
        element={
          <Home books={books} moveBookBetweenShelves={moveBookBetweenShelves} />
        }
      />
      <Route
        path="/search"
        element={<Search moveBookBetweenShelves={moveBookBetweenShelves} />}
      />
    </Routes>
  );
}

export default App;
