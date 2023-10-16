const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
   _id: Object,
   productos_id: Object,
   fechaVenta: Date,
   totalVenta: Number,
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
