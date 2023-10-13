const express = require('express');
const router = express.Router();
const ocupacionController = require('../controllers/ocupacionController');

// Rutas para Ocupaciones
router.get('/ocupaciones', ocupacionController.getAll);
router.get('/ocupaciones/:id', ocupacionController.getById);
router.post('/ocupaciones', ocupacionController.create);
router.put('/ocupaciones/:id', ocupacionController.update);
router.delete('/ocupaciones/:id', ocupacionController.delete);

module.exports = router;
