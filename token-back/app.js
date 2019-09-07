// Requires

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
const request = require('request');

//Inicializar variables
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var listaReproduccionRoutes = require('./routes/lista-reproduccion');

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/spotiAppDB', { useNewUrlParser: true }, (err, res) => {

    if (err) {
        console.log('error:', error);
        throw err;

    }

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/lista-reproduccion', listaReproduccionRoutes);
app.use('/', appRoutes);

app.post('/token', (req, res, next) => {
    const body = req.body;
    const grant_type = body.grant_type;
    const client_id = body.client_id;
    const client_secret = body.client_secret;
    const spotifyUrl = 'https://accounts.spotify.com/api/token';



    var authOptions = {
        url: spotifyUrl,
        headers: {
            Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
        },
        form: {
            grant_type: grant_type
        },
        json: true
    };


    request.post(authOptions, (err, httpResponse, body) => {

        if (err) {
            return resp.status(400).json({
                ok: false,
                mensaje: 'No se pudo obtener el token',
                err,
                status: 400
            })
        }

        res.json({
            body: body,
            status: 200
        });

    });

});

app.listen(3000, () => {
    console.log('Express server purto 3000: online');
});