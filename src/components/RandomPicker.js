import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Route } from "react-router-dom";

export default function RandomPicker(props) {
  return (
    <div>
      <h2>Pick your perfect match:</h2>
      This page will show images of a specific dog breed.
      <Route exact path="/randompicker/image" component={Image} />
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
