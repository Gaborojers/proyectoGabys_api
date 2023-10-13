const Producto = require('../models/productoModel');

const productosController = {
    getAll: async (req, res) => {
        try {
            const productos = await Producto.find();
            res.json(productos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const producto = await Producto.findById(req.params.id);
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const producto = new Producto(req.body);
            await producto.save();
            res.status(201).json(producto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(producto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const producto = await Producto.findByIdAndRemove(req.params.id);
            if (!producto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto eliminado con éxito' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = productosController;
