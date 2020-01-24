import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RandomPicker from "./components/RandomPicker";

function App() {
  return (
    <div className="App">
      <Route exact path="/randompicker" component={RandomPicker} />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
