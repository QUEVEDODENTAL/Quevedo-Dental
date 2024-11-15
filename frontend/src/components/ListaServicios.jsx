import React from "react";

const ListaServicios = ({ servicios, handleEditarServicio, handleEliminarServicio }) => {
  return (
    <ul className="servicios-list">
      {servicios.map((servicio, index) => (
        <li key={index} className="servicio-card">
          <span className="servicio-nombre">{servicio.nombre}</span>
          <span className="servicio-precio">${servicio.precio}</span>
          <div className="acciones">
            <button onClick={() => handleEditarServicio(index)} className="btn-editar">Editar</button>
            <button onClick={() => handleEliminarServicio(index)} className="btn-eliminar">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
};


export default ListaServicios;
