// 'use strict';
const chalk = require('chalk');
const red = chalk.red;	
const Actress = require("../models").Actress;
const Movie = require("../models").Movie;
const CharName = require("../models").CharName;
const CastInfo = require("../models").CastInfo;
const expect = require('chai').expect;

describe('basic movie search', function () {
  xit('movies has class method that gets all movie titles', function (done) {
  	Movie.narrowedSearch()
		.then(function(results){
			console.log(chalk.blue(results));
		  	expect(results[0]).to.have.property('title');
		  	done();
	 	}).catch(function(err){
	  		// console.log(red(err));
	  		done();
	  	});
 	});
   xit('movies has class method that gets an array of matches for a specific title from narrowed results', function (done) {
  	Movie.searchResults("Up")
		.then(function(array){
			console.log(chalk.blue(array));
		  	expect(array).to.have.length.of.at.least(1);
		  	done();
	 	}).catch(function(err){
	  		console.log(red(err));
	  		done();
	  	});
 	});
    xit('searchResults gets results with and wo subliners', function (done) {
  	Movie.searchResults("The Lord of the Rings: The Fellowship of the Ring")
		.then(function(array){
		  	expect(array).to.be.an('array');
		  	//console.log(chalk.green(array));
		  	expect(array).to.have.length.of.at.least(2);
		  	done();
	 	}).catch(function(err){
	 		//console.log(red(err));
	 		done();
	  	});
 	});
 	xit('handles erros and loads message', function (done) {
  	Movie.searchResults("Tfdsafdsa")
		.then(function(array){
			console.log(chalk.blue(array));
	 	}).catch(function(err){
	 		expect(err).to.equal("no results found");
	 		//console.log(red(err));
	  		done();
	  	});
 	});
	 	
});

// describe('actresses', function () {
// 	it('it gets the name table info"', function (done) {
// 		Actress.findAll({
// 			where: {
// 				$or: [{id: 33373}, 
// 					  {id: 33374}]
// 			}
// 		}).then(function(results){
// 			results.forEach(function(lady){
// 				// console.log(lady.name, lady.surname_pcode);
// 			});
// 			done();
// 		});
// 	});
// });

describe("sampleSearch", function() {

	describe("get movie id", function() {
		//243892
		xit('it finds the id for Mary Poppins"', function (done) {
			Movie.findAll({
				where: {title: "Mary Poppins", 
						kind_id: 1}
			})
			.then(function(result){
				// console.log(result);
				done();
			})
			.catch(function(err){
				done();
			});
		});
	});

	describe('roles', function () {
		//243892 and finds a list of the role ids and actor ids from that movie (we only have actress data, so golden)
		it('it takes a person and finds all the roles they have been in "', function (done) {
			var JulieAndrewsRoles = [];

			CastInfo.findAll({
				where: {
						person_id: 33373
				}
			}).then(function(roles){
				return roles.map(function(role){
					//console.log(role.movie_id, role.id);
					return  Movie.findOne ({
						where: { id: role.movie_id }
					});

				});
			
			}).then (function(arrayOfSearches){
				Promise.all(arrayOfSearches)
				.then(function(arrayOfResults){
					arrayOfResults.forEach(function(search){
						console.log(search.title);
					});
				});
			}).catch(function(err){
				console.log(err);
			});
		});
	});
	// describe('roles', function () {
	// 	//243892 and finds a list of the role ids and actor ids from that movie (we only have actress data, so golden)
	// 	it('it takes a movie id"', function (done) {
	// 		Role.findAll({
	// 			where: {
	// 					$and: [{name_pcode_nf: "J4536"}, {name: "Julie Andrews"}]

	// 			}
	// 		}).then(function(results){
	// 			results.forEach(function(lady){
	// 				// console.log(lady);
	// 			});
	// 			done();
	// 		});
	// 	});
	// });

});

//roles
// id: 50543, name: 'Julie Andrews'


//actress info Julie Andrews 
// 33373	Andrews, Julie	I		f	A5362	J4536		fa24729b869181bead6e3d18ac9af0fc
// 33374	Andrews, Julie	IV		f	A5362	J4536		b0232ec2ab8bc8271b86d4b4bcd9708a
// 33375	Andrews, Julie D.			f	A5362	J4353		28502729873cf0fdabd21c7d043eddeawhere: {
			// 	$and: [ {name_pcode_cf: "A5362"}, 
			// 			{name_pcode_nf: "J4536"} ]
			// }