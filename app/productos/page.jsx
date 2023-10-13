import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Producto from '../../models/productoModel';
import productosController from '../../controllers/productosController';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState(null);
  const router = useRouter();

  useEffect(() => {
    productosController.getAll().then(result => {
      setProductos(result);
    });
  }, []);

  const handleCreate = async () => {
    const productoCreado = await productosController.create({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
    });
    setProductos([...productos, productoCreado]);
    setProducto(null);
    router.push('/productos');
  };

  const handleUpdate = async (id) => {
    const productoActualizado = await productosController.update(id, {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
    });
    setProductos([...productos, productoActualizado]);
    setProducto(null);
    router.push('/productos');
  };

  const handleDelete = async (id) => {
    await productosController.delete(id);
    setProductos(productos.filter(e => e.id !== id));
    setProducto(null);
    router.push('/productos');
  };

  return (
    <div>
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>
                <button onClick={() => setProducto(producto)}>Editar</button>
                <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {producto && (
        <div>
          <h2>Editar producto</h2>
          <form onSubmit={e => handleUpdate(e.target.id.value)}>
            <input type="text" name="id" id="id" value={producto.id} hidden />
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={producto.nombre}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              value={producto.descripcion}
              placeholder="Descripción"
            />
            <input
              type="number"
              name="precio"
              id="precio"
              value={producto.precio}
              placeholder="Precio"
            />
            <input
              type="number"
              name="stock"
              id="stock"
              value={producto.stock}
              placeholder="Stock"
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      )}
      <button onClick={() => setProducto(null)}>Nuevo producto</button>
    </div>
  );
};

export default Productos;