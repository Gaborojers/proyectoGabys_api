const mongoose = require('mongoose');

const ocupacionSchema = new mongoose.Schema({
   _id: Object,
   Ocupacion: String,
   Salario: Number,
});

const Ocupacion = mongoose.model('Ocupacion', ocupacionSchema);

module.exports = Ocupacion;
