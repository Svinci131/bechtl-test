var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/testMovies');

// var movies = db.define('movies',{
// 	title: {type: Sequelize.STRING,
// 			allowNull: false},
// 	year: {type: Sequelize.INTEGER}
// });

//var actors = define

//var roles = define

// module.exports = {
// 	movies: movies, 
	//actors: actors, 
	// roles
// };