const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

// Rutas para Empleados
router.get('/empleados', empleadosController.getAll);
router.get('/empleados/:id', empleadosController.getById);
router.post('/empleados', empleadosController.create);
router.put('/empleados/:id', empleadosController.update);
router.delete('/empleados/:id', empleadosController.delete);

module.exports = router;
