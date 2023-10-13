const Paleta = require('../models/paletaModel');

const paletasController = {
   getAll: async (req, res) => {
       try {
           const paletas = await Paleta.find();
           res.json(paletas);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   getById: async (req, res) => {
       try {
           const paleta = await Paleta.findById(req.params.id);
           if (!paleta) {
               return res.status(404).json({ error: 'Paleta no encontrada' });
           }
           res.json(paleta);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   create: async (req, res) => {
       try {
           const paleta = new Paleta(req.body);
           await paleta.save();
           res.status(201).json(paleta);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   update: async (req, res) => {
       try {
           const paleta = await Paleta.findByIdAndUpdate(req.params.id, req.body, { new: true });
           if (!paleta) {
               return res.status(404).json({ error: 'Paleta no encontrada' });
           }
           res.json(paleta);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   delete: async (req, res) => {
       try {
           const paleta = await Paleta.findByIdAndRemove(req.params.id);
           if (!paleta) {
               return res.status(404).json({ error: 'Paleta no encontrada' });
           }
           res.json({ message: 'Paleta eliminada con éxito' });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },
};

module.exports = paletasController;
