import React from 'react';
import './MovieEditor.less';

class MovieEditor extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            title: '',
            year: '',
            format: '',
            starring: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleStarringChange = this.handleStarringChange.bind(this);
        this.handleMovieAdd = this.handleMovieAdd.bind(this);

    };

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    };

    handleYearChange(event) {
        this.setState({ year: event.target.value });
        if(!/^[0 -9]{4}$/.test(event.target.value) && event.target.value.length != 0) {
            event.currentTarget.className = 'MovieEditor__input--warn';
        }
        else {
            event.currentTarget.className = 'MovieEditor__input';
        }
    };

    handleFormatChange(event) {
        this.setState({ format: event.target.value });
        if(!/^(VHS)$|^(DVD)$|^(Blu-Ray)$/i.test(event.target.value) && event.target.value.length != 0) {
            event.currentTarget.className = 'MovieEditor__input--warn';
        }
        else {
            event.currentTarget.className = 'MovieEditor__input';
        }
    };

    handleStarringChange(event) {
        this.setState({ starring: event.target.value });
        if(/[^a-z,\s]/i.test(event.target.value) && event.target.value.length != 0) {
            event.currentTarget.className = 'MovieEditor__input--warn';
        }
        else {
            event.currentTarget.className = 'MovieEditor__input';
        }
    };

    handleMovieAdd() {
        const newMovie = {
            title: this.state.title,
            year: this.state.year,
            format: this.state.format,
            starring: this.state.starring
        };

        this.props.onMovieAdd(newMovie);
        this.setState({ title: '', year: '', format: '', starring: '' });
    };

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
                    placeholder='Enter release year(4 numbers)'
                    value={this.state.year}
                    onChange={this.handleYearChange}
                    onBlur={this.handleYearChange}
                />
                <input
                    type='text'
                    className='MovieEditor__input'
                    placeholder='Format: VHS, DVD, Blu-Ray'
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
                        disabled={!this.state.title||!/^[0 -9]{4}$/.test(this.state.year)||!/^(VHS)$|^(DVD)$|^(Blu-Ray)$/i.test(this.state.format)||/[^a-z,\s]/i.test(this.state.starring)||!this.state.starring}
                        onClick={this.handleMovieAdd}
                    >
                        Add movie
                    </button>
                </div>
            </div>
        );
    };
};

export default MovieEditor;
