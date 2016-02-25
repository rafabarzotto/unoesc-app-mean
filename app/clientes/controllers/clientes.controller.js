'use strict';

var mongoose = require('mongoose'),
    Cliente = require('../models/cliente.model');

exports.findAll = function(req, res) {
    Cliente.find({}).exec(function(err, clientes) {
        if (err) {
            console.error(err);
            res.status(400).json(err);
        } else {
            res.json(clientes);
        }
    });
};
exports.find = function(req, res) {
    res.json(req.cliente);
};
exports.create = function(req, res) {
    var cliente = new Cliente(req.body);
    cliente.save(function(err) {
        if (err) {
            res.status(400).json({
                message: err
            });
        } else {
            res.json({
                message: 'Cliente criado com sucesso',
                cliente: cliente
            });
        }
    });
};
exports.update = function(req, res) {
    var cliente = req.cliente;
    cliente.cod_banco = req.body.cod_banco;
    cliente.nome = req.body.nome;
    cliente.login = req.body.login;
    cliente.ip = req.body.ip;
    cliente.save(function(err) {
        if (err) {
            res.status(400).json({
                message: err
            });
        } else {
            res.json({
                message: 'Cliente alterado com sucesso',
                cliente: cliente
            });
        }
    });
};
exports.delete = function(req, res) {
    var cliente = req.cliente;
    cliente.remove(function(err) {
        if (err) {
            res.status(400).json({
                message: err
            });
        } else {
            res.json({
                message: 'Cliente removida com sucesso',
                cliente: cliente
            });
        }
    });
};
exports.clienteById = function(req, res, next, clienteId) {
    if (!mongoose.Types.ObjectId.isValid(clienteId)) {
        res.status(400).json({
            message: 'Cliente inválido'
        })
    }
    Cliente.findById(clienteId).exec(function(err, cliente) {
        if (err) {
            res.status(404).json(err);
        }
        req.cliente = cliente;
        next();
    });
}