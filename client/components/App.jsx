import React from 'react';

import MoviesStore from '../store/MoviesStore';
import MoviesActions from '../actions/MoviesActions';

import MovieEditor from './MovieEditor.jsx';
import MoviesGrid from './MoviesGrid.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: MoviesStore.isLoading(),
        movies: MoviesStore.getMovies(),
        displayContent: MoviesStore.getMovies()
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

    handleSearch (event) {
      const searchQuery = event.target.value.toLowerCase();
      let displayContent
      if(event.target.id == 'name'){
         displayContent = this.state.movies.filter(function (el) {
              const searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
      } else {
         displayContent = this.state.movies.filter(function (el) {
              const searchValue = el.starring.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
      }

      this.setState({ 
          displayContent: displayContent
      });
  
  },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Movies app</h2>
                <MovieEditor onMovieAdd={this.handleMovieAdd} />
                <MoviesGrid movies={this.state.displayContent} 
                 onMovieDelete={this.handleMovieDelete}
                 searcher={this.handleSearch}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
