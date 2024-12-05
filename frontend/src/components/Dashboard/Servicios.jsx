import { useState } from "react";
import FormularioServicios from "./FormularioServicios";
import ListaServicios from "./ListaServicios";
import "./Servicios.css";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [nuevoServicio, setNuevoServicio] = useState({ nombre: "", precio: "" });
  const [editando, setEditando] = useState(false);
  const [indexEditando, setIndexEditando] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoServicio({ ...nuevoServicio, [name]: value });
  };

  const handleAddServicio = (e) => {
    e.preventDefault();
    if (nuevoServicio.nombre.trim() && nuevoServicio.precio.trim()) {
      if (editando) {
        // Actualizar servicio
        const serviciosActualizados = [...servicios];
        serviciosActualizados[indexEditando] = nuevoServicio;
        setServicios(serviciosActualizados);
        setEditando(false);
        setIndexEditando(null);
      } else {
        // Agregar nuevo servicio
        setServicios([...servicios, nuevoServicio]);
      }
      setNuevoServicio({ nombre: "", precio: "" });
    } else {
      alert("Por favor, completa ambos campos");
    }
  };

  const handleEditarServicio = (index) => {
    setNuevoServicio(servicios[index]);
    setEditando(true);
    setIndexEditando(index);
  };

  const handleEliminarServicio = (index) => {
    const serviciosActualizados = servicios.filter((_, i) => i !== index);
    setServicios(serviciosActualizados);
  };

  return (
    <div className="servicios-container">
      <h2>Servicios</h2>
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
