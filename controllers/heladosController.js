const Helado = require('../models/heladoModel');

const heladosController = {
   getAll: async (req, res) => {
       try {
           const helados = await Helado.find();
           res.json(helados);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   getById: async (req, res) => {
       try {
           const helado = await Helado.findById(req.params.id);
           if (!helado) {
               return res.status(404).json({ error: 'Helado no encontrado' });
           }
           res.json(helado);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   create: async (req, res) => {
       try {
           const helado = new Helado(req.body);
           await helado.save();
           res.status(201).json(helado);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   update: async (req, res) => {
       try {
           const helado = await Helado.findByIdAndUpdate(req.params.id, req.body, { new: true });
           if (!helado) {
               return res.status(404).json({ error: 'Helado no encontrado' });
           }
           res.json(helado);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   delete: async (req, res) => {
       try {
           const helado = await Helado.findByIdAndRemove(req.params.id);
           if (!helado) {
               return res.status(404).json({ error: 'Helado no encontrado' });
           }
           res.json({ message: 'Helado eliminado con éxito' });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },
};

module.exports = heladosController;
