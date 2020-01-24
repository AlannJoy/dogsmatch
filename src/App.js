import React from "react";
import "./App.css";
import Image from "./components/Image";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="my-welcome-text">
        <h1>Welcome to Dogs-Match!!</h1>
        <h3>Is your dog having a hard time finding a partner?</h3>
        <div>
          <p className="p-welcome">
            Dont hesitate and join us... Click here to see some beautiful
            canin...
          </p>
        </div>
        <Route exact path="/randompicker" component={Image} />
        <Link to={`/randompicker`}>{Image}</Link>
      </div>
    </div>
  );
}

export default App;
