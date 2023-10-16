const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
   nombre: String,
   apellido: String,
   numTel: Number,
   Ocupacion_id: Object,
   correo: String,
   contraseña: String,
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
