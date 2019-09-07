var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trackSchema = new Schema({
    idSpotifyTrack: { type: String, required: [true, 'El id del spotyfyTrack es necesario'] },
})

module.exports = mongoose.model('Track', trackSchema);