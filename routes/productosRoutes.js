const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas para Productos
router.get('/productos', productosController.getAll);
router.get('/productos/:id', productosController.getById);
router.post('/productos', productosController.create);
router.put('/productos/:id', productosController.update);
router.delete('/productos/:id', productosController.delete);

module.exports = router;
