import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Paleta from '../../models/paletaModel';
import paletasController from '../../controllers/paletasController';

const Paletas = () => {
  const [paletas, setPaletas] = useState([]);
  const [paleta, setPaleta] = useState(null);
  const router = useRouter();

  useEffect(() => {
    paletasController.getAll().then(result => {
      setPaletas(result);
    });
  }, []);

  const handleCreate = async () => {
    const paletaCreada = await paletasController.create({
      nombre: paleta.nombre,
      descripcion: paleta.descripcion,
    });
    setPaletas([...paletas, paletaCreada]);
    setPaleta(null);
    router.push('/paletas');
  };

  const handleUpdate = async (id) => {
    const paletaActualizada = await paletasController.update(id, {
      nombre: paleta.nombre,
      descripcion: paleta.descripcion,
    });
    setPaletas([...paletas, paletaActualizada]);
    setPaleta(null);
    router.push('/paletas');
  };

  const handleDelete = async (id) => {
    await paletasController.delete(id);
    setPaletas(paletas.filter(e => e.id !== id));
    setPaleta(null);
    router.push('/paletas');
  };

  return (
    <div>
      <h1>Paletas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paletas.map((paleta, index) => (
            <tr key={paleta.id}>
              <td>{paleta.id}</td>
              <td>{paleta.nombre}</td>
              <td>{paleta.descripcion}</td>
              <td>
                <button onClick={() => setPaleta(paleta)}>Editar</button>
                <button onClick={() => handleDelete(paleta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {paleta && (
        <div>
          <h2>Editar paleta</h2>
          <form onSubmit={e => handleUpdate(e.target.id.value)}>
            <input type="text" name="id" id="id" value={paleta.id} hidden />
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={paleta.nombre}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              value={paleta.descripcion}
              placeholder="Descripción"
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      )}
      <button onClick={() => setPaleta(null)}>Nueva paleta</button>
    </div>
  );
};

export default Paletas;
