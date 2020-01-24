import React, { Component } from "react";

export default class Image extends Component {
  state = {
    imageUrl: ""
  };

  componentDidMount() {
    this.getRamdomDog();
  }

  getRamdomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const dogsImage = data.message;
        console.log(dogsImage);
        this.updateState(dogsImage);
      })
      .catch(console.error);
  }

  updateState(dog) {
    this.setState({
      imageUrl: dog
    });
  }

  handleClick() {
    this.getRamdomDog();
  }

  render() {
    return (
      <div>
        <h1>HOla!</h1>
        <form>
          <img
            alt="We are having problems right now... Try leter!"
            src={this.state.imageUrl}
          />
          <button onClick={this.handleClick}>Tell us!</button>
        </form>
      </div>
    );
  }
}
