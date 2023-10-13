  import React, { useState } from 'react';
  import { useRouter } from 'next/router';
  import { useEffect } from 'react';
  import Empleado from '../../models/empleadoModel';
  import empleadosController from '../../controllers/empleadosController';

  const Empleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [empleado, setEmpleado] = useState(null);
    const router = useRouter();

    useEffect(() => {
      empleadosController.getAll().then(result => {
        setEmpleados(result);
      });
    }, []);

    const handleCreate = async () => {
      const empleadoCreado = await empleadosController.create({
        nombre: empleado.nombre,
        apellido: empleado.apellido,
      });
      setEmpleados([...empleados, empleadoCreado]);
      setEmpleado(null);
      router.push('/empleados');
    };

    const handleUpdate = async (id) => {
      const empleadoActualizado = await empleadosController.update(id, {
        nombre: empleado.nombre,
        apellido: empleado.apellido,
      });
      setEmpleados([...empleados, empleadoActualizado]);
      setEmpleado(null);
      router.push('/empleados');
    };

    const handleDelete = async (id) => {
      await empleadosController.delete(id);
      setEmpleados(empleados.filter(e => e.id !== id));
      setEmpleado(null);
      router.push('/empleados');
    };

    return (
      <div>
        <h1>Empleados</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado, index) => (
              <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>
                  <button onClick={() => setEmpleado(empleado)}>Editar</button>
                  <button onClick={() => handleDelete(empleado.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {empleado && (
          <div>
            <h2>Editar empleado</h2>
            <form onSubmit={e => handleUpdate(e.target.id.value)}>
              <input type="text" name="id" id="id" value={empleado.id} hidden />
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={empleado.nombre}
                placeholder="Nombre"
              />
              <input
                type="text"
                name="apellido"
                id="apellido"
                value={empleado.apellido}
                placeholder="Apellido"
              />
              <button type="submit">Guardar</button>
            </form>
          </div>
        )}
        <button onClick={() => setEmpleado(null)}>Nuevo empleado</button>
      </div>
    );
  };

  export default Empleados;
