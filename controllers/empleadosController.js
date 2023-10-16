const Empleado = require('../models/empleadoModel');

const empleadosController = {
   getAll: async (req, res) => {
       try {
           const empleados = await Empleado.find();
           res.json(empleados);
       } catch (error) {
           res.status(500).json({ error: error.message });
       } 
   },

   getById: async (req, res) => {
       try {
           const empleado = await Empleado.findById(req.params.id);
           if (!empleado) {
               return res.status(404).json({ error: 'Empleado no encontrado' });
           }
           res.json(empleado);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   create: async (req, res) => {
       try {
           const empleado = new Empleado(req.body);
           await empleado.save();
           res.status(201).json(empleado);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   update: async (req, res) => {
       try {
           const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
           if (!empleado) {
               return res.status(404).json({ error: 'Empleado no encontrado' });
           }
           res.json(empleado);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   delete: async (req, res) => {
       try {
           const empleado = await Empleado.findByIdAndRemove(req.params.id);
           if (!empleado) {
               return res.status(404).json({ error: 'Empleado no encontrado' });
           }
           res.json({ message: 'Empleado eliminado con éxito' });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },
};

module.exports = empleadosController;
