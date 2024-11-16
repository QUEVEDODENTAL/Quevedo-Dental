import React, { useState } from "react";

const Enfermedades = ({ pacienteNombre }) => {
  const [enfermedad, setEnfermedad] = useState("");
  const [tieneEnfermedad, setTieneEnfermedad] = useState(null);

  const handleEnfermedadChange = (e) => {
    setEnfermedad(e.target.value);
  };

  const handleEnfermedadStatus = (e) => {
    setTieneEnfermedad(e.target.value);
  };

  return (
    <div className="form-section">
      <h2>Enfermedades</h2>
      <label htmlFor="enfermedad">Enfermedad:</label>
      <input
        type="text"
        id="enfermedad"
        value={enfermedad}
        onChange={handleEnfermedadChange}
        placeholder="Ingrese el nombre de la enfermedad"
      />
      <div className="options">
        <div>
          <input
            type="radio"
            id="si"
            name="enfermedadStatus"
            value="Sí"
            onChange={handleEnfermedadStatus}
            checked={tieneEnfermedad === "Sí"}
          />
          <label htmlFor="si">Sí</label>
        </div>
        <div>
          <input
            type="radio"
            id="no"
            name="enfermedadStatus"
            value="No"
            onChange={handleEnfermedadStatus}
            checked={tieneEnfermedad === "No"}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
      {tieneEnfermedad === "Sí" && (
        <div>
          <label htmlFor="causas">Causas:</label>
          <input type="text" id="causas" placeholder="Causas de la enfermedad" />
        </div>
      )}
    </div>
  );
};

export default Enfermedades;
