const mongoose = require('mongoose');

const heladoSchema = new mongoose.Schema({
   sabor: String,
   precio: Number,
   // Otros campos del modelo de Helado
});

const Helado = mongoose.model('Helado', heladoSchema);

module.exports = Helado;
