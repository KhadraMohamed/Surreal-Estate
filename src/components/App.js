import React from "react";
import "../styles/app.css";
import Navbar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h2> Surreal Estate </h2>
      </header>
    </div>
  );
};

export default App;
