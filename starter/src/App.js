import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return <div className="app">{showSearchPage ? <Search /> : <Home />}</div>;
}

export default App;
