import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

export default function RandomPicker(props) {
  return (
    <main>
      <div className="random-picker">
        <h2>Pick your perfect match:</h2>
        This page will show images of a specific dog breed.
      </div>
      <Image />
      <Link to="/">
        <button>Go back to the index</button>
      </Link>
    </main>
  );
}
