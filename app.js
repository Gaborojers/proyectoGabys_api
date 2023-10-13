const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/proyectoGabys', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
   console.log('Conexión a la BD exitosa...');
});

connection.on('error', (err) => {
   console.log('Error en la conexión a la BD: ', err);
});

// Importa las rutas de cada colección
const empleadosRoutes = require('./routes/empleadosRoutes');
const productosRoutes = require('./routes/productosRoutes');
const heladosRoutes = require('./routes/heladosRoutes');
const paletasRoutes = require('./routes/paletasRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
const ocupacionesRoutes = require('./routes/ocupacionRoutes');

// Usa las rutas de cada colección
app.use('/api/empleados', empleadosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/helados', heladosRoutes);
app.use('/api/paletas', paletasRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/ocupaciones', ocupacionesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
