import React from "react";
import { Route } from "react-router-dom";
import RandomPicker from "./RandomPicker";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="my-welcome-text">
      <h1>Welcome to Dogs-Match!!</h1>
      <h3>Is your dog having a hard time finding a partner?</h3>
      <div>
        <p className="p-welcome">
          Dont hesitate and join us... Click here to see some beautiful canin...
        </p>
      </div>
      <Route exact path="/randompicker" component={RandomPicker} />
      <Link to={`/randompicker/image`}>Searching for the perfect match?</Link>
    </div>
  );
}
