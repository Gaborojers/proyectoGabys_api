const Ocupacion = require('../models/ocupacionModel');

const ocupacionController = {
   getAll: async (req, res) => {
       try {
           const ocupaciones = await Ocupacion.find();
           res.json(ocupaciones);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   getById: async (req, res) => {
       try {
           const ocupacion = await Ocupacion.findById(req.params.id);
           if (!ocupacion) {
               return res.status(404).json({ error: 'Ocupación no encontrada' });
           }
           res.json(ocupacion);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   create: async (req, res) => {
       try {
           const ocupacion = new Ocupacion(req.body);
           await ocupacion.save();
           res.status(201).json(ocupacion);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   update: async (req, res) => {
       try {
           const ocupacion = await Ocupacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
           if (!ocupacion) {
               return res.status(404).json({ error: 'Ocupación no encontrada' });
           }
           res.json(ocupacion);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   delete: async (req, res) => {
       try {
           const ocupacion = await Ocupacion.findByIdAndRemove(req.params.id);
           if (!ocupacion) {
               return res.status(404).json({ error: 'Ocupación no encontrada' });
           }
           res.json({ message: 'Ocupación eliminada con éxito' });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },
};

module.exports = ocupacionController;
