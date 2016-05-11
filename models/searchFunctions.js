var model = require("./index");
var Kind = model.Kind; 

function isString (arg) {
	if (typeof arg !== "string") return false; 
	else return true;
}

//string => error message or boolean
function searchMovie (title) {
	// if (!isValid(title)) return "title does not exist"; 
}
//string => boolean
function isValid () {

}

function findKind (string) {

	// var result = Kind.findByKind(string)
	// .then(function(result){
	// 	return result;
	// })
	// .catch(err);

	// console.log(result); 
	// return result;

}
//string => boolean
function checkPassing () {

}

module.exports = {
	isString: isString,
	findKind: findKind
};