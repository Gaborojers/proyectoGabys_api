const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

// Rutas para Ventas
router.get('/ventas', ventasController.getAll);
router.get('/ventas/:id', ventasController.getById);
router.post('/ventas', ventasController.create);
router.put('/ventas/:id', ventasController.update);
router.delete('/ventas/:id', ventasController.delete);

module.exports = router;
