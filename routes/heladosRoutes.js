const express = require('express');
const router = express.Router();
const heladosController = require('../controllers/heladosController');

// Rutas para Helados
router.get('/helados', heladosController.getAll);
router.get('/helados/:id', heladosController.getById);
router.post('/helados', heladosController.create);
router.put('/helados/:id', heladosController.update);
router.delete('/helados/:id', heladosController.delete);

module.exports = router;
