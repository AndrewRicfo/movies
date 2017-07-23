const app = require('../server/app');
const Movie = require('../server/models/Movie')
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const assert = require('assert');

mongoose.Promise = global.Promise;
chai.use(chaiHttp);

describe('/api/movies GET', () => {

      it('should GET all the Movies', (done) => {

        chai.request(app)
        .get('/api/movies')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });

      });

});


describe('/api/movies POST', () => {

  it('should POST a movie to the database', (done) => {

    let movie = new Movie({
      title: "Movie",
      year: "2017",
      format: "DVD",
      starring: "Chernyavskiy"
    });

    movie.save().then(function() {
      assert(movie.isNew === false);
      done();
    });

  });

});


describe('/api/movies/:id delete', () => {

  var movie;

  beforeEach(function(done) {
    movie = new Movie({
      title: "Title",
      year: "1111",
      format: "VHS",
      starring: "Ryan"
    });

    movie.save().then(function() {
      assert(movie.isNew === false);
      done();
    })
  })

  it('should DELETE a movie by the given id', (done) => {

   Movie.findOneAndRemove({title: 'Title'}).then(function() {
    Movie.findOne({title: 'Title'}).then(function(result) {
      assert(result === null);
      done();
    })
   })

  });

});