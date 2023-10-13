const express = require('express');
const router = express.Router();
const paletasController = require('../controllers/paletasController');

// Rutas para Paletas
router.get('/paletas', paletasController.getAll);
router.get('/paletas/:id', paletasController.getById);
router.post('/paletas', paletasController.create);
router.put('/paletas/:id', paletasController.update);
router.delete('/paletas/:id', paletasController.delete);

module.exports = router;
