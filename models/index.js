var Sequelize = require ("Sequelize");
var db = new Sequelize('postgres://localhost:5432/testMovies', {
    dialect: 'postgres'
});

var Kind = db.define("kind_type", {
	id: {
		type: Sequelize.INTEGER, 
		primaryKey: true
	}, 
	kind: {
		type: Sequelize.STRING
	}
	}, {
		timestamps: false,
		paranoid: true,
		freezeTableName: true,
		tableName: 'kind_type'
	}); 

Kind.sync().then (function(data){
	console.log(data);
	return Kind.findAll({
		where: {id: 1}
	});
}).then(function(results){
	console.log(results);
});

// module.exports = {
// 	Kind: Kind
// };



