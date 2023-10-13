import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Helado from '../../models/heladoModel';
import heladosController from '../../controllers/heladosController';

const Helados = () => {
  const [helados, setHelados] = useState([]);
  const [helado, setHelado] = useState(null);
  const router = useRouter();

  useEffect(() => {
    heladosController.getAll().then(result => {
      setHelados(result);
    });
  }, []);

  const handleCreate = async () => {
    const heladoCreado = await heladosController.create({
      sabor: empleado.sabor,
      precio: empleado.precio,
    });
    setHelados([...helados, heladoCreado]);
    setHelado(null);
    router.push('/helados');
  };

  const handleUpdate = async (id) => {
    const heladoActualizado = await heladosController.update(id, {
      sabor: empleado.sabor,
      precio: empleado.precio,
    });
    setHelados([...helados, heladoActualizado]);
    setHelado(null);
    router.push('/helados');
  };

  const handleDelete = async (id) => {
    await heladosController.delete(id);
    setHelados(helados.filter(e => e.id !== id));
    setHelado(null);
    router.push('/helados');
  };

  return (
    <div>
      <h1>Helados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sabor</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {helados.map((helado, index) => (
            <tr key={helado.id}>
              <td>{helado.id}</td>
              <td>{helado.sabor}</td>
              <td>{helado.precio}</td>
              <td>
                <button onClick={() => setHelado(helado)}>Editar</button>
                <button onClick={() => handleDelete(helado.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {empleado && (
        <div>
          <h2>Editar helado</h2>
          <form onSubmit={e => handleUpdate(e.target.id.value)}>
            <input type="text" name="id" id="id" value={empleado.id} hidden />
            <input
              type="text"
              name="sabor"
              id="sabor"
              value={empleado.sabor}
              placeholder="Sabor"
            />
            <input
              type="number"
              name="precio"
              id="precio"
              value={empleado.precio}
              placeholder="Precio"
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      )}
      <button onClick={() => setHelado(null)}>Nuevo helado</button>
    </div>
  );
};

export default Helados;