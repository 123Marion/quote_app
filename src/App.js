// import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* {!user ? (
        <User setUser={setUser} />
      ) : ( */}
      <>
        <Navbar />
        {/* <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/add-review/:id" element={<AddReview user={user} reviews= {reviews} onAddReview={handleAddReview}/>} />
          </Routes> */}
      </>
      {/* )} */}
    </div>
  );
}

export default App;
