const assert = require('assert');
const app = require('../server/app');
const Movie = require('../server/models/Movie')
const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

mongoose.Promise = global.Promise;

chai.use(chaiHttp);

beforeEach( (done) => { 
  Movie.remove({}, (err) => { 
   done();         
 });     
});



describe('/GET movie', () => {

  it('should GET all the Movies', (done) => {

    chai.request(app)
    .get('/movies')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(0);
      done();
    });

  });

});

describe('/POST movie', () => {

  it('should POST a movie ', (done) => {

    let movie = {
      title: "The Lord of the Rings",
      year: "1995",
      format: "VHS",
      starring: "Actor1, Actor2"
    }
    chai.request(app)
    .post('/movies')
    .send(movie)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('__v');
      res.body.should.have.property('title').eql('The Lord of the Rings');
      res.body.should.have.property('year').eql("1995");
      res.body.should.have.property('format').eql("VHS");
      res.body.should.have.property('starring').eql("Actor1, Actor2");
      done();
    });

  });

});

describe('/DELETE/:id movie', () => {

  it('should DELETE a movie by the given id', (done) => {

    let movie = new Movie({title: "The Chronicles of Narnia", year: "2015", format: "Blu-Ray", starring: "Nonames"})
    movie.save((err, book) => {
      chai.request(app)
      .delete('/movies/' + book.id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('ok').eql(1);
        res.body.should.have.property('n').eql(1);
        done();
      });
    });

  });

});