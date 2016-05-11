//http://imdbpy.sourceforge.net/docs/README.sqldb.txt
var express = require( 'express' );
var app = express();
var morgan = require("morgan");
var swig = require("swig");
// var routes = require("./routes");
var bodyParser = require("body-parser"); 
var http = require("http");


app.get("/", function(req, res){
	res.send("hello");
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});