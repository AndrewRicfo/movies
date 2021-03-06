# SPA for movies

## Overview & motivation

This single page application has been created to learn ReactJS basics and gain experience in REST API development. NodeJS and Express were used to create server, MongoDB was used to store data. Mocha and chai - for simple API and database testing.

## API Reference

API is presented by GET, POST and DELETE requests to server.
- ```get http://localhost:3000/api/movies``` - get the list of all movies in the database;
- ```post http://localhost:3000/api/movies``` and the body of the request is {"title":"The Lord of the Rings","year":"2001","format":"DVD","starring":"Elijah Wood, Ian McKellen"} - add movie to the database;
- ```post http://localhost:3000/api/movies/multiple``` and the body should contain FormData object - import movies from .txt file.
- ```delete http://localhost:3000/api/movies/:id``` and the body is {"_id":"59735e426030cc1070c2dba0"}  - delete movie by given id 

## Installation prerequisites

### NodeJS

Firstable you need to install [NodeJS](https://nodejs.org/uk/) if you don't have it yet:
- For Windows: [download .msi installer](https://nodejs.org/en/download)
- For Linux: type ```curl -L https://npmjs.org/install.sh | sh``` in terminal
- For Mac: [download .pkg installer](https://nodejs.org/en/download) or type ```brew install node```, if you use [Homebrew](http://brew.sh/)

Confirm adding nodejs folder to PATH environment variable.

### MongoDB

Then you should install [MongoDB](https://www.mongodb.com/) on your computer. Download link: https://www.mongodb.org/downloads.
Installing MongoDB on Windows may be painful. In this situation I recommend you to follow [this guide](http://metanit.com/nosql/mongodb/1.2.php) or [this video guide](https://www.youtube.com/watch?v=1uFY60CESlM&feature=youtu.be).

Add path to your mongodb/bin (by default C:\Program Files\MongoDB\bin\) folder to PATH environment variable.

Create folder C:\data\db (the place where database will be stored). If you already have folder with database files on your computer then you need to run ```mongod --dbpath=*path to your folder*```(without asterisk) on Step 4 of "How to start" algorithm.

## How to start

1) Clone or download this repository to your computer.
2) Open your terminal. Navigate to local repository folder. Run ```npm install``` to get all the dependencies installed.
3) Run ```npm run server``` to start the server. Leave the terminal opened.
4) Open another terminal. Navigate to repository folder. Run ```mongod``` to start MongoDB primary daemon process. Leave that terminal opened too.
5) Open ```http://localhost:3000``` in your browser.

## Tests

To run tests type ```npm test``` in your command line when you are in project folder.
