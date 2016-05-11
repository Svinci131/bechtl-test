// const http = require("http");
// const app = require("./app"); 
// const server = http.createServer();
var model = require("./models");
var Kind = model.Kind; 



console.log(Kind);
// server.on("request", require("./app"));

// console.log(model.kid);

Kind.sync()
.then(function(data){
	console.log("here", data);
	// server.listen("3000", function() {
	// 	console.log("listening on port 3000");
	// });
	Kind.findAll().then(function(data){
		console.log("foo", data);
	});
}).catch(function(err){
	console.log(err);
});
	
