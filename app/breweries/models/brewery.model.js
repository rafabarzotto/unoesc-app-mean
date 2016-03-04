'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrewerySchema = new Schema({
	name: {
		type: String,
		unique: true,
		require: true
	},
	description: {
		type: String
	},
	created: {
		type: Date
	},
	updated: {
		type: Date
	}
});

BrewerySchema.pre('save', function(next) {
    var brewery = this;
    if (this.isNew) {
        brewery.created = new Date();
    }
    brewery.updated = new Date();
    next();
});

module.exports = mongoose.model('Brewery', BrewerySchema);