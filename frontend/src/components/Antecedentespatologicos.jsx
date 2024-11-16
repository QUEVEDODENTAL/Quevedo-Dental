import React, { useState } from "react";

const AntecedentesPatologicos = ({ pacienteId }) => {
  const [antecedentes, setAntecedentes] = useState({
    disease: "",
    diagnosisDate: "",
    diseaseType: "",
    chronic: false,
    treatment: "",
    observations: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAntecedentes({
      ...antecedentes,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", antecedentes, "Paciente ID:", pacienteId);
    // Aquí puedes enviar los datos a tu backend.
  };

  return (
    <form onSubmit={handleSubmit} className="antecedentes-patologicos">
      <h2>Antecedentes Patológicos</h2>
      <div>
        <label>Enfermedad:</label>
        <input
          type="text"
          name="disease"
          value={antecedentes.disease}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Fecha de Diagnóstico:</label>
        <input
          type="date"
          name="diagnosisDate"
          value={antecedentes.diagnosisDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tipo de Enfermedad:</label>
        <select
          name="diseaseType"
          value={antecedentes.diseaseType}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione...</option>
          <option value="Cardiovasculares">Cardiovasculares</option>
          <option value="Hematológicas">Hematológicas</option>
          <option value="Neurológicas">Neurológicas</option>
          <option value="Pulmonares">Pulmonares</option>
          <option value="Endocrinas">Endocrinas</option>
          <option value="Metabólicas">Metabólicas</option>
          <option value="Renales">Renales</option>
          <option value="Mentales">Mentales</option>
          <option value="Gastrointestinales">Gastrointestinales</option>
          <option value="Dermatológicas">Dermatológicas</option>
          <option value="Cáncer">Cáncer</option>
          <option value="Otros">Otros</option>
          <option value="ENFERMEDADES DE LA INFANCIA">Enfermedades de la infancia</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="chronic"
            checked={antecedentes.chronic}
            onChange={handleChange}
          />
          ¿Es crónica?
        </label>
      </div>
      <div>
        <label>Tratamiento:</label>
        <textarea
          name="treatment"
          value={antecedentes.treatment}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Observaciones:</label>
        <textarea
          name="observations"
          value={antecedentes.observations}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AntecedentesPatologicos;
