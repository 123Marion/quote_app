// import logo from './logo.svg';
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Hero from "./components/home/Hero";
import AddQuote from "./components/quote/AddQuote";
import ViewQuote from "./components/quote/ViewQuote";
import { Route, Routes } from "react-router-dom";

function App() {
  const [comments, setComments] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [user, setUser] = useState([]);

  function handleAddComments(newComments) {
    setComments([...comments, newComments]);
  }

  return (
    <div className="App">
      {/* {!user ? (
        <User setUser={setUser} />
      ) : ( */}
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/add-quote" element={<AddQuote />} />
          <Route
            exact
            path="/add-comment/:id"
            element={<ViewQuote onAddComment={handleAddComments} />}
          />
        </Routes>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
