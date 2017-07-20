import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _movies = [];
let _loadingError = null;
let _isLoading = true;

function formatMovie(movie) {
    return {
        id: movie._id,
        title: movie.title,
        year: movie.year,
        format: movie.format,
        starring: movie.starring

    };
}

const MoviesStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getMovies() {
        return _movies;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_MOVIES_REQUEST: {
            _isLoading = true;

            MoviesStore.emitChange();
            break;
        }

        case AppConstants.LOAD_MOVIES_SUCCESS: {
            _isLoading = false;
            _movies = action.movies.map( formatMovie );
            _loadingError = null;

            MoviesStore.emitChange();
            break;
        }

        case AppConstants.LOAD_MOVIES_FAIL: {
            _loadingError = action.error;

            MoviesStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default MoviesStore;