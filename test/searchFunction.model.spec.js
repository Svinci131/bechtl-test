var expect = require('chai').expect;
var utilities = require('../models/searchFunctions');
var Kind = require("../models");

describe('utilities', function () {
	var isString = utilities.isString;
	it('if string return true', function () {
		var strTest = isString("hello");
		var objTest = isString({hi: "hello"});
		expect(strTest).to.equal(true);
		expect(objTest).to.equal(false);
	});
});


//Generate Movie List 
////Generate All Passing Movies 
///Does it pass? 