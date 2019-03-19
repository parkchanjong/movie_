import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
	state = {
		movies: [
			{
				title: '1',
				poster:
					'https://images.unsplash.com/photo-1552668158-f8a225511bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			},
			{
				title: '2',
				poster:
					'https://images.unsplash.com/photo-1552690984-f6312c5a2456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			},
			{
				title: '3',
				poster:
					'https://images.unsplash.com/photo-1552664199-008d16422ef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			},
			{
				title: '4',
				poster:
					'https://images.unsplash.com/photo-1552694908-18a5257268f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			},
		],
	};
	componentDidMount() {
		console.log('asdf');
		setTimeout(() => {
			this.setState({
				movies: [
					...this.state.movies,
					{
						title: '5',
						poster:
							'https://images.unsplash.com/photo-1552781899-a885fc899da2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
					},
				],
			});
		}, 5000);
	}

	render() {
		return (
			<div className="App">
				{this.state.movies.map((movie, index) => {
					return <Movie title={movie.title} poster={movie.poster} key={index} />;
				})}
			</div>
		);
	}
}

export default App;
