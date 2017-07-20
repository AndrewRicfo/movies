import React from 'react';

import './MovieEditor.less';

const MovieEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            year: '',
            format: '',
            starring: ''
        };
    },

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },

    handleYearChange(event) {
        this.setState({ year: event.target.value });
    },

    handleFormatChange(event) {
        this.setState({ format: event.target.value });
    },

    handleStarringChange(event) {
        this.setState({ starring: event.target.value });
    },

    handleMovieAdd() {
        const newMovie = {
            title: this.state.title,
            year: this.state.year,
            format: this.state.format,
            starring: this.state.starring
        };

        this.props.onMovieAdd(newMovie);
        this.setState({ title: '', year: '', format: '', starring: '' });
    },

    render() {
        return (
            <div className='MovieEditor'>
                <input
                    type='text'
                    className='MovieEditor__input'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <input
                    type='text'
                    className='MovieEditor__input'
                    placeholder='Enter year'
                    value={this.state.year}
                    onChange={this.handleYearChange}
                />
                <input
                    type='text'
                    className='MovieEditor__input'
                    placeholder='Enter format'
                    value={this.state.format}
                    onChange={this.handleFormatChange}
                />
                <input
                    type='text'
                    className='MovieEditor__input'
                    placeholder='Enter actors(comma separated)'
                    value={this.state.starring}
                    onChange={this.handleStarringChange}
                />
                <div className='MovieEditor__footer'>
                    <button
                        className='MovieEditor__button'
                        disabled={!this.state.title||!this.state.year||!this.state.format||!this.state.starring}
                        onClick={this.handleMovieAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default MovieEditor;
