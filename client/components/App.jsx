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
        displayContent: MoviesStore.getMovies().slice()
    };
}

class App extends React.Component {
    
    constructor() {

        super();

        this.state = getStateFromFlux();

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this._onChange = this._onChange.bind(this);

    };

    componentWillMount() {
        MoviesActions.loadMovies();
    };

    componentDidMount() {
        MoviesStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        MoviesStore.removeChangeListener(this._onChange);
    };

    handleMovieDelete(movie) {
        MoviesActions.deleteMovie(movie.id);
    };

    handleMovieAdd(movieData) {
        MoviesActions.createMovie(movieData);
    };

    handleMovieMultipleAdd(moviesData) {
        MoviesActions.createMovieMultiple(moviesData);
    };

    handleSearch(event) {
      const searchQuery = event.target.value.toLowerCase();
      let displayContent;

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

    };

    handleSort(event) {
      let displayContent = MoviesStore.getMovies().slice();

      if(event.target.id == 'sort') {
        displayContent.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
      }

      this.setState ({
        displayContent: displayContent
      });

    };

    _onChange() {
        this.setState(getStateFromFlux());
    };

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Movies app</h2>
                <MovieEditor onMovieAdd={this.handleMovieAdd}
                            onMovieMultipleAdd={this.handleMovieMultipleAdd}/>
                <MoviesGrid movies={this.state.displayContent} 
                            onMovieDelete={this.handleMovieDelete}
                            searcher={this.handleSearch}
                            sorter={this.handleSort}
                />
            </div>
        );
    };

};

export default App;
