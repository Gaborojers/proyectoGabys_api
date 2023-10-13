import React, { useState } from 'react';
import { Link } from 'next/router';

const Menu = () => {
  const [helados, setHelados] = useState(null);
  const [ocupaciones, setOcupaciones] = useState(null);
  const [paletas, setPaletas] = useState(null);
  const [productos, setProductos] = useState(null);
  const [ventas, setVentas] = useState(null);
  const [empleados, setEmpleados] = useState(null);

  return (
    <div>
      <h1>Menú principal</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/helados">Helados</Link>
        </li>
        <li>
          <Link to="/ocupaciones">Ocupaciones</Link>
        </li>
        <li>
          <Link to="/paletas">Paletas</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/empleados">Empleados</Link>
        </li>
        <li>
          <Link to="/ventas">Ventas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
