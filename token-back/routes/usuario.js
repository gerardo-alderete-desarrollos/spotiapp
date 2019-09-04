var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/auth');

var app = express();

var Usuario = require('../models/usuario');

// ==========================================
// Crear un nuevo usuario
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    var usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
    });

    usuario.save((err, usuarioGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear usuario',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            usuario: usuarioGuardado,
            usuariotoken: req.usuario
        });


    });

});

module.exports = app;