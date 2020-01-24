import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
