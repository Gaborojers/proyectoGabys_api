const mongoose = require('mongoose');

const ocupacionSchema = new mongoose.Schema({
   fecha: Date,
   empleadoId: mongoose.Schema.Types.ObjectId, // Referencia al empleado
   // Otros campos del modelo de Ocupación
});

const Ocupacion = mongoose.model('Ocupacion', ocupacionSchema);

module.exports = Ocupacion;
