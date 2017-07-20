import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Movie';

const Movie = mongoose.model('Movie');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listMovies(id) {
    return Movie.find();
}

export function createMovie(data) {
    const movie = new Movie({
        title: data.title,
        year: data.year,
        format: data.format,
        starring: data.starring
    });

    return movie.save();
}

export function deleteMovie(id) {
    return Movie.findById(id).remove();
}