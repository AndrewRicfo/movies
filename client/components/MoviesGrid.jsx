import React from 'react';
import Movie from './Movie.jsx';

import Masonry from 'react-masonry-component';

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
            <Masonry
                className='MoviesGrid'
                options={masonryOptions}
            >
                {
                    this.props.movies.map(movie =>
                        <Movie
                            key={movie.id}
                            title={movie.title}
                            onDelete={this.props.onMovieDelete.bind(null, movie)}
                        >
                            {movie.year}, {movie.format}.
                        </Movie>
                    )
                }
            </Masonry>
        );
    }
});

export default MoviesGrid;
