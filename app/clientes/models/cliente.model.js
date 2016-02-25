'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
	cod_banco:{
		type: String,
	},
	nome:{
		type: String,
		require: true
	},
	login:{
		type: String,
		require: true
	},
	ip:{
		type: String,
		require: true
	}
});

module.exports = mongoose.model('Cliente', ClienteSchema);