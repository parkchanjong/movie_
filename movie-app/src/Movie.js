import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>Movie</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return <img src="" />;
  }
}

export default Movie;
