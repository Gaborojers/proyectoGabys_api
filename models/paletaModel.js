const mongoose = require('mongoose');

const paletaSchema = new mongoose.Schema({
   sabor: String,
   precio: Number,
   // Otros campos del modelo de Paleta
});

const Paleta = mongoose.model('Paleta', paletaSchema);

module.exports = Paleta;
