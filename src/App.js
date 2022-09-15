// import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Hero from "./components/home/Hero";
import AddQuote from "./components/quote/AddQuote";
import { Route, Routes } from "react-router-dom";

function App() {
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
        </Routes>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
