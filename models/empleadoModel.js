const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
   nombre: String,
   apellido: String,
   // Otros campos del modelo
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
