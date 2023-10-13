const Venta = require('../models/ventaModel');

const ventasController = {
   getAll: async (req, res) => {
       try {
           const ventas = await Venta.find();
           res.json(ventas);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   getById: async (req, res) => {
       try {
           const venta = await Venta.findById(req.params.id);
           if (!venta) {
               return res.status(404).json({ error: 'Venta no encontrada' });
           }
           res.json(venta);
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },

   create: async (req, res) => {
       try {
           const venta = new Venta(req.body);
           await venta.save();
           res.status(201).json(venta);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   update: async (req, res) => {
       try {
           const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
           if (!venta) {
               return res.status(404).json({ error: 'Venta no encontrada' });
           }
           res.json(venta);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   },

   delete: async (req, res) => {
       try {
           const venta = await Venta.findByIdAndRemove(req.params.id);
           if (!venta) {
               return res.status(404).json({ error: 'Venta no encontrada' });
           }
           res.json({ message: 'Venta eliminada con éxito' });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   },
};

module.exports = ventasController;
