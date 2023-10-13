const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
   fecha: Date,
   productos: [String], // Puede ser una referencia a productos o un array de nombres
   // Otros campos del modelo de Venta
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
