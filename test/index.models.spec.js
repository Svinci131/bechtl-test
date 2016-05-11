'use strict';
const chalk = require('chalk')
const red = chalk.red;	
const Kind = require("../models").Kind;
const Movie = require("../models").Movie;
const expect = require('chai').expect;

describe('classmethods for movies ect', function () {
  it('class methods work and dont make anything weird', function (done) {
  	Kind.findByKind("movies")
  	.then(function(results){
  		done();
  	}).catch(function(err){
  		console.log(red(err));
  	});
  });

  it('movies has class method that gets all movie titles', function (done) {
  	Movie.narrowedSearch()
		.then(function(results){
		  	expect(results[0]).to.have.property('title');
		  	done();
	 	}).catch(function(err){
	  		console.log(red(err));
	  	});
 	});
   it('movies has class method that gets an array of matches for a specific title from narrowed results', function (done) {
  	Movie.searchResults("Up")
		.then(function(array){
		  	expect(array).to.have.length.of.at.least(1);
		  	done();
	 	}).catch(function(err){
	  		console.log(red(err));
	  	});
 	});
    it('searchResults gets results with and wo subliners', function (done) {
  	Movie.searchResults("The Lord of the Rings: The Fellowship of the Ring")
		.then(function(array){
		  	expect(array).to.be.an('array');
		  	expect(array).to.have.length.of.at.least(2);
		  	done();
	 	}).catch(function(err){
	 		console.log(red(err));
	  	});
 	});
 	it('handles erros and loads message', function (done) {
  	var test = Movie.searchResults("Tfdsafdsa")
		.then(function(array){

	 	}).catch(function(err){
	 		expect(err).to.equal("no results found");
	 		console.log(red(err));
	  		done();
	  	});
 	});
	 	
});
