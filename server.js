const http = require("http");
const app = require("./app"); 
const server = http.createServer();
const model = require("./models");

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/testMovies');



server.on("request", require("./app"));

model.sync()
.then(function(data){
	console.log(data);
	server.listen("3000", function() {
		console.log("listening on port 3000");
	});
});
	