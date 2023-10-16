const mongoose = require('mongoose');

const heladoSchema = new mongoose.Schema({
   _id: Object,
   sabor: String,
   Productos_id: Object,
});

const Helado = mongoose.model('Helado', heladoSchema);

module.exports = Helado;
