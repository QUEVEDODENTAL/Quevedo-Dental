import React, { useState } from "react";
import './Examenclinicointraoral.css'

const ExamenClinicoIntraoral = ({ pacienteId }) => {
  const [examen, setExamen] = useState({
    examinationDate: "",
    gums: "",
    tongue: "",
    hardPalate: "",
    softPalate: "",
    pharynx: "",
    floorOfMouth: "",
    residualRidge: "",
    occlusionType: "",
    observations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamen({
      ...examen,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", examen, "Paciente ID:", pacienteId);
    // Aquí puedes enviar los datos al backend
  };

  return (
    <form onSubmit={handleSubmit} className="examen-clinico">
      <h2>Examen Clínico Intraoral</h2>
      <div>
        <label>Fecha del Examen:</label>
        <input
          type="date"
          name="examinationDate"
          value={examen.examinationDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Encías:</label>
        <input
          name="gums"
          value={examen.gums}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Lengua:</label>
        <input
          name="tongue"
          value={examen.tongue}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Paladar duro:</label>
        <input
          name="hardPalate"
          value={examen.hardPalate}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Paladar blando:</label>
        <input
          name="softPalate"
          value={examen.softPalate}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Faringe:</label>
        <input
          name="pharynx"
          value={examen.pharynx}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Piso de la boca:</label>
        <input
          name="floorOfMouth"
          value={examen.floorOfMouth}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Cresta residual:</label>
        <input
          name="residualRidge"
          value={examen.residualRidge}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Tipo de oclusión:</label>
        <input
          type="text"
          name="occlusionType"
          value={examen.occlusionType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Observaciones:</label>
        <input
          name="observations"
          value={examen.observations}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ExamenClinicoIntraoral;
