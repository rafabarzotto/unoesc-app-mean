'use strict';

module.exports = function(api) {
	var clientes = require('../controllers/clientes.controller');

	api.route('/clientes')
		.get(clientes.findAll)
		.post(clientes.create);

	api.route('/clientes/:clienteId')
		.get(clientes.find)
		.put(clientes.update)
		.delete(clientes.delete);

	api.param('clienteId', clientes.clienteById);		

}