// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Hero from "./components/home/Hero";
import AddQuote from "./components/quote/AddQuote";
import ViewQuote from "./components/quote/ViewQuote";
import { Route, Routes } from "react-router-dom";
import User from "./components/input/User";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/quotes")
      .then((r) => r.json())
      .then((quotes) => setQuotes(quotes));
  }, []);

  // function handleAddComments(newComments) {
  //   setComments([...comments, newComments]);
  // }
  function handleAddQuote(newQuote) {
    setQuotes([...quotes, newQuote]);
  }
  console.log("quotes", quotes);

  return (
    <div className="App">
      {!user ? (
        <User setUser={setUser} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Hero quotes={quotes} user={user} />}
            />
            <Route
              exact
              path="/add-quote"
              element={<AddQuote onAddQuote={handleAddQuote} />}
            />
            <Route
              exact
              path="/add-comment/:id"
              element={<ViewQuote user={user} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
