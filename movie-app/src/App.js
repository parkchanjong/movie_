import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
	state = {};
	componentDidMount() {
		this._getMovies();
	}

	_renderMovies = () => {
		const movies = this.state.movies.map(movie => {
			console.log(movie);
			return (
				<Movie
					title={movie.title_english}
					poster={movie.small_cover_image}
					key={movie.id}
					genres={movie.genres}
					synopsis={movie.synopsis}
				/>
			);
		});
		return movies;
	};

	_getMovies = async () => {
		const movies = await this._callApi();
		this.setState({
			movies,
		});
	};

	_callApi = () => {
		return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
			.then(res => res.json())
			.then(json => json.data.movies)
			.catch(err => console.log(err));
	};

	render() {
		return <div className="App">{this.state.movies ? this._renderMovies() : 'Loading'}</div>;
	}
}

export default App;
