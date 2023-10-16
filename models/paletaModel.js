const mongoose = require('mongoose');

const paletaSchema = new mongoose.Schema({
   _id: Object,
   sabor: String,
   Productos_id: Object,
});

const Paleta = mongoose.model('Paleta', paletaSchema);

module.exports = Paleta;
