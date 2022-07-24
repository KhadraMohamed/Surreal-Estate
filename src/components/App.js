import React from "react";
import "../styles/app.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
      <header className="App-header">
        <h2> Surreal Estate </h2>
      </header>
    </div>
  );
};

export default App;
