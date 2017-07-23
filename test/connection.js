const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done) {
	mongoose.connect('mongodb://localhost/testaroo', {useMongoClient: true});
	mongoose.connection.once('open', function() {
		done();
	}).on('error', function(error) {
		console.log('Connection error: ', error);
	});
});

beforeEach(function(done) {
	mongoose.connection.collections.movies.drop(function() {
		done();
	});
});

after(function (done) {
    mongoose.connection.dropDatabase(function () {
        mongoose.connection.close(function () {
            done();
        });
    });
});