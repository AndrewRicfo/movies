import React from 'react';
import Movie from './Movie.jsx';
import Masonry from 'react-masonry-component';
import SearchSortField from './SearchSortField.jsx';
import './MoviesGrid.less';

const MoviesGrid = React.createClass({



    render() {
        const masonryOptions = {
            itemSelector: '.Movie',
            columnWidth: 700,
            gutter: 10,
            isFitWidth: true
        };


        return (
            <div className="MoviesGrid__wrapper">
                <SearchSortField movies={this.props.movies} searcher={this.props.searcher} />
                <Masonry
                    className='MoviesGrid'
                    options={masonryOptions}
                >

                    {
                        this.props.movies.map(movie =>
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                year={movie.year}
                                format={movie.format}
                                starring={movie.starring}
                                onDelete={this.props.onMovieDelete.bind(null, movie)}
                            >
                                {movie.year}, {movie.format}.
                            </Movie>
                        )
                    }

                </Masonry>
            </div>
        );
    }
});

export default MoviesGrid;
