import React from "react";

const FormularioServicios = ({ nuevoServicio, handleChange, handleAddServicio }) => {
  return (
    <form onSubmit={handleAddServicio} className="formulario-servicios">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del servicio"
        value={nuevoServicio.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="precio"
        placeholder="Precio del servicio"
        value={nuevoServicio.precio}
        onChange={handleChange}
      />
      <button type="submit">{nuevoServicio.nombre ? "Editar Servicio" : "Añadir Servicio"}</button>
    </form>
  );
};


export default FormularioServicios;
