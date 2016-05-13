var model = require("./index");
var Kind = model.Kind; 
var Movie = model.Kind;
function isString (arg) {
	if (typeof arg !== "string") return false; 
	else return true;
}

function search() {}

//string => error message or arrau
function isMovie (title) {
	// if (isString(title)) //return false; 
	// Movie.searchResults(title)
	// .then(function(array) {
	// 	//model.resultsList = array
	// })
	// .catch(function(err){
	// 	reactModel.resultsList.push("no results") 
	// }); 
}

//string => 
function hasMultActresses  (title) {
	//complete cast movieid and type id(1 for cast);
//char table has with last and first name key codes and md5sum?
//name - actresses- id- name and md5sum?
}

//string => promise 
function getCharNames () {
	//returns CharNames
}

module.exports = {
	isString: isString,
	findKind: findKind
};