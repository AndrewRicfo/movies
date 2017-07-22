import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title     : { type: String, required: true },
    year      : { type: String, required: true },
    format    : { type: String, required: true },
    starring  : { type: String, required: true }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;