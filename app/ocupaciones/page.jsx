import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Ocupacion from '../../models/ocupacionModel';
import ocupacionesController from '../../controllers/ocupacionesController';

const Ocupaciones = () => {
  const [ocupaciones, setOcupaciones] = useState([]);
  const [ocupacion, setOcupacion] = useState(null);
  const router = useRouter();

  useEffect(() => {
    ocupacionesController.getAll().then(result => {
      setOcupaciones(result);
    });
  }, []);

  const handleCreate = async () => {
    const ocupacionCreada = await ocupacionesController.create({
      nombre: ocupacion.nombre,
      descripcion: ocupacion.descripcion,
    });
    setOcupaciones([...ocupaciones, ocupacionCreada]);
    setOcupacion(null);
    router.push('/ocupaciones');
  };

  const handleUpdate = async (id) => {
    const ocupacionActualizada = await ocupacionesController.update(id, {
      nombre: ocupacion.nombre,
      descripcion: ocupacion.descripcion,
    });
    setOcupaciones([...ocupaciones, ocupacionActualizada]);
    setOcupacion(null);
    router.push('/ocupaciones');
  };

  const handleDelete = async (id) => {
    await ocupacionesController.delete(id);
    setOcupaciones(ocupaciones.filter(e => e.id !== id));
    setOcupacion(null);
    router.push('/ocupaciones');
  };

  return (
    <div>
      <h1>Ocupaciones</h1>
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
          {ocupaciones.map((ocupacion, index) => (
            <tr key={ocupacion.id}>
              <td>{ocupacion.id}</td>
              <td>{ocupacion.nombre}</td>
              <td>{ocupacion.descripcion}</td>
              <td>
                <button onClick={() => setOcupacion(ocupacion)}>Editar</button>
                <button onClick={() => handleDelete(ocupacion.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {ocupacion && (
        <div>
          <h2>Editar ocupación</h2>
          <form onSubmit={e => handleUpdate(e.target.id.value)}>
            <input type="text" name="id" id="id" value={ocupacion.id} hidden />
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={ocupacion.nombre}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              value={ocupacion.descripcion}
              placeholder="Descripción"
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      )}
      <button onClick={() => setOcupacion(null)}>Nueva ocupación</button>
    </div>
  );
};

export default Ocupaciones;
