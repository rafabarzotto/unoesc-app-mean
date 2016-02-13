'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrewerySchema = new Schema({
	name:{
		type: String,
		unique: true,
		require: true
	},
	description:{
		type: String
	}
});

module.exports = mongoose.model('Brewery', BrewerySchema);