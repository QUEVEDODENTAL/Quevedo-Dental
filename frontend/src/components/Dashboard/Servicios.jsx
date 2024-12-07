import { useState, useEffect } from 'react';
import FormularioServicios from './FormularioServicios';
import ListaServicios from './ListaServicios';
import './Servicios.css'; // Importa el archivo CSS

const Servicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetchServicios();
  }, []);

  const fetchServicios = async () => {
    try {
      const response = await fetch('http://localhost:3000/servicios/view');
      const data = await response.json();
      setServicios(data);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  };

  const onServicioEditado = () => {
    fetchServicios();
  };

  const onServicioEliminado = () => {
    fetchServicios();
  };

  return (
    <div className="servicios-container">
      <h1 className="service-title">Servicios</h1>
      <FormularioServicios
        nuevoServicio={nuevoServicio}
        handleChange={handleChange}
        handleAddServicio={handleAddServicio}
      />
      <ListaServicios
        servicios={servicios}
        handleEditarServicio={handleEditarServicio}
        handleEliminarServicio={handleEliminarServicio}
      />
    </div>
  );
};

export default Servicios;
