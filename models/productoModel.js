const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    _id: Object,
    nombre: String,
    Cantidad: Number,
    precio: Number,
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
