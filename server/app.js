import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import expressFileupload from 'express-fileupload';
import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';
import {parseFileString} from './utils/parseFileString'

// Initialization of express application
const app = express();

mongoose.Promise = global.Promise;

// Set up connection of database
db.setUpConnection();

app.use(expressFileupload());

// Using bodyParser middleware
app.use(bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(express.static("public"));

// RESTful api handlers
app.get('/api/movies', (req, res) => {
    db.listMovies().then(data => res.send(data));
});

app.post('/api/movies', (req, res) => {
    db.createMovie(req.body).then(data => res.send(data));
});

app.post('/api/movies/multiple', (req, res) => {
	const fileData = req.files && req.files.movies && req.files.movies.data && req.files.movies.data.toString(); // req.files.source should be a Buffer
	if (fileData) {
		const parsedData = parseFileString(fileData);// get parsed films
		const tasks = parsedData.map((item) => db.createMovie(item));// create appropriate records in db
		Promise.all(tasks)// after all is done send response
			.then(data => res.send(data))
			.catch(err => { 
				res.statusCode = 500;
				res.end(JSON.stringify(err,4,4));
			});
	} else {
		res.statusCode = 500;
		res.end();
	}
});

app.delete('/api/movies/:id', (req, res) => {
    db.deleteMovie(req.params.id).then(data => res.send(data));
});

app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});

module.exports = app;