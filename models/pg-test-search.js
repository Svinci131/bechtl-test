var pg = require('pg');
var conString = 'postgres://localhost:5432/testMovies';
var client = new pg.Client(conString);

client.connect();

client.query('SELECT * FROM kind_type', function (err, result) {
	console.log(result);
});


