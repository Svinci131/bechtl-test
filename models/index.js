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
		tableName: 'kind_type', 
		classMethods: {
			findByKind: function(str) {
				return Kind.findAll({
					where: {kind: str}
				});
			}
		}
	}
	); 


//var Movie = db.define("title", {
// 	id: {
// 		type: Sequelize.INTEGER, 
// 		primaryKey: true
// 	}, 
// 	title: {
// 		type: Sequelize.STRING
// 	}, 
// 	kind: {
// 		type: Sequelize.INTEGER,
// 	}, 
// 	production_year: {
// 		type: Sequelize.INTEGER,
// 	}
// 	}, {
// 		timestamps: false,
// 		paranoid: true,
// 		freezeTableName: true,
// 		tableName: 'kind_type'
// 	}); 

module.exports = {
	Kind: Kind, 
	// Movie: Movie
};



