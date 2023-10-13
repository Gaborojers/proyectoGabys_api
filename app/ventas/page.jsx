import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Venta from '../../models/ventaModel';
import ventasController from '../../controllers/ventasController';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [venta, setVenta] = useState(null);
  const router = useRouter();

  useEffect(() => {
    ventasController.getAll().then(result => {
      setVentas(result);
    });
  }, []);

  const handleCreate = async () => {
    const ventaCreada = await ventasController.create({
      fecha: venta.fecha,
      productos: venta.productos,
      total: venta.total,
    });
    setVentas([...ventas, ventaCreada]);
    setVenta(null);
    router.push('/ventas');
  };

  const handleUpdate = async (id) => {
    const ventaActualizada = await ventasController.update(id, {
      fecha: venta.fecha,
      productos: venta.productos,
      total: venta.total,
    });
    setVentas([...ventas, ventaActualizada]);
    setVenta(null);
    router.push('/ventas');
  };

  const handleDelete = async (id) => {
    await ventasController.delete(id);
    setVentas(ventas.filter(e => e.id !== id));
    setVenta(null);
    router.push('/ventas');
  };

  return (
    <div>
      <h1>Ventas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => (
            <tr key={venta.id}>
              <td>{venta.id}</td>
              <td>{venta.fecha}</td>
              <td>{venta.productos}</td>
              <td>{venta.total}</td>
              <td>
                <button onClick={() => setVenta(venta)}>Editar</button>
                <button onClick={() => handleDelete(venta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {venta && (
        <div>
          <h2>Editar venta</h2>
          <form onSubmit={e => handleUpdate(e.target.id.value)}>
            <input type="text" name="id" id="id" value={venta.id} hidden />
            <input
              type="date"
              name="fecha"
              id="fecha"
              value={venta.fecha}
              placeholder="Fecha"
            />
            <input
              type="text"
              name="productos"
              id="productos"
              value={venta.productos}
              placeholder="Productos"
            />
            <input
              type="number"
              name="total"
              id="total"
              value={venta.total}
              placeholder="Total"
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      )}
      <button onClick={() => setVenta(null)}>Nueva venta</button>
    </div>
  );
};

export default Ventas;