var express = require('express');

var mdAutenticacion = require('../middlewares/auth');

var app = express();

var ListaReproduccion = require('../models/lista-reproduccion');

// ==========================================
// Crear un nuevo lista de reproduccion
// ==========================================
app.post('/create', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    var listaReproduccion = new ListaReproduccion({
        listaNombre: body.lista_reproduccion,
        tracks: body.tracks
    });

    listaReproduccion.save((err, listaReproduccionGuardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear lista de reproduccion',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            listaReproduccion: listaReproduccionGuardado,
        });

    });
});
// ==========================================
// Obtener lista de reproduccion
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {
    var desde = req.query.desde || 0;
    desde = Number(desde);

    ListaReproduccion.find({})
        .skip(desde)
        .limit(5)
        .exec(
            (err, listaReproduccion) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando lista de reproduccion',
                        errors: err
                    });
                }
                ListaReproduccion.count({}, (err, conteo) => {
                    res.status(200).json({
                        ok: true,
                        listaReproduccion: listaReproduccion,
                        total: conteo
                    });
                })
            });
});


module.exports = app;