import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listMovies() {
        return axios.get(`${apiPrefix}/api/movies`);
    },

    createMovie(data) {
        return axios.post(`${apiPrefix}/api/movies`, data);
    },

    deleteMovie(movieId) {
        return axios.delete(`${apiPrefix}/api/movies/${movieId}`);
    }
}
