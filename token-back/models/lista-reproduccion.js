var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listaReproduccionSchema = new Schema({
    listaNombre: { type: String, required: [true, 'El nombre de la lista de reproduccion es necesario'] },
    tracks: { type: Array, unique: true, required: [true, 'Las canciones son requeridas'] }
})

module.exports = mongoose.model('ListaReproduccion', listaReproduccionSchema);