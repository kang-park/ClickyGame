import React, { Component } from 'react';
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ScoreBar from "./components/ScoreBar";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    images,
    clickedImages: [],
    score: 0
  };

  shuffleCards = array =>{
    array.sort((a,b) => 0.5 - Math.random());
    return array;
  };

  imageClick = event =>{
    console.log(event.target);
    let currentImage = event.target.alt;
    let alreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

    if (alreadyClicked){
      alert("You lost!");
      this.setState({
        images: this.shuffleCards(images),
          clickedImages:[],
          score: 0
      });
    } else {
      this.setState(
        {
          images: this.shuffleCards(images),
          clickedImages: this.state.clickedImages.concat(currentImage),
          score: this.state.score +1
        },
        () => {
          if (this.state.score === 12){
            alert("You win!");
            this.setState({
              images: this.shuffleCards(images),
              clickedImages: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render(){
    return(
      <div>
        <Header
          title="Super Smash Bros Memory Game"
          desc="A React Memory Game"
          rules="Click on a different Super Smash character every time to earn a point. If you click on the same character twice, the game will start over"
        />
        <ScoreBar score = {this.state.score} />
        <Wrapper>
          {this.state.images.map(image => (
            <ImageCard
              imageClick={this.imageClick}
              id={image.id}
              key={image.id}
              image={image.imageURL}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
