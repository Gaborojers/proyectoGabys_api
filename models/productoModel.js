const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    // Otros campos del modelo
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
