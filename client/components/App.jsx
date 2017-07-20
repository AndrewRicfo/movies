import React from 'react';

import MoviesStore from '../store/MoviesStore';
import MoviesActions from '../actions/MoviesActions';

import MovieEditor from './MovieEditor.jsx';
import MoviesGrid from './MoviesGrid.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: MoviesStore.isLoading(),
        movies: MoviesStore.getMovies()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        MoviesActions.loadMovies();
    },

    componentDidMount() {
        MoviesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        MoviesStore.removeChangeListener(this._onChange);
    },

    handleMovieDelete(movie) {
        MoviesActions.deleteMovie(movie.id);
    },

    handleMovieAdd(movieData) {
        MoviesActions.createMovie(movieData);
    },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Movies app</h2>
                <MovieEditor onMovieAdd={this.handleMovieAdd} />
                <MoviesGrid movies={this.state.movies} onMovieDelete={this.handleMovieDelete} />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
