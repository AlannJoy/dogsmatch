import React, { Component } from "react";

export default class Images extends Component {
  state = {
    images: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => this.updateImages(data.message))
      .catch(console.error);
  }

  render() {
    return <div></div>;
  }
}
