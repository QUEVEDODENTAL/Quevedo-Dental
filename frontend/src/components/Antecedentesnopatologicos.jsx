import React, { useState } from "react";
import '../styles/AntecedentesNoPatologicos.css'

const AntecedentesNoPatologicos = ({ pacienteId }) => {
  const [antecedentesNoPatologicos, setAntecedentesNoPatologicos] = useState({
    smoking: false,
    substanceAbuse: false,
    alcoholism: false,
    sedentary: false,
    surgeries: "",
    exercise: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setAntecedentesNoPatologicos({
      ...antecedentesNoPatologicos,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Datos enviados:",
      antecedentesNoPatologicos,
      "Paciente ID:",
      pacienteId
    );
    // Aquí puedes enviar los datos al backend
  };

  return (
    <form onSubmit={handleSubmit} className="antecedentes-no-patologicos">
      <h2>Antecedentes No Patológicos</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="smoking"
            checked={antecedentesNoPatologicos.smoking}
            onChange={handleChange}
          />
          Fuma
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="substanceAbuse"
            checked={antecedentesNoPatologicos.substanceAbuse}
            onChange={handleChange}
          />
          Abuso de sustancias
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="alcoholism"
            checked={antecedentesNoPatologicos.alcoholism}
            onChange={handleChange}
          />
          Alcoholismo
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="sedentary"
            checked={antecedentesNoPatologicos.sedentary}
            onChange={handleChange}
          />
          Sedentarismo
        </label>
        <label>
          <input
            type="checkbox"
            name="exercise"
            checked={antecedentesNoPatologicos.exercise}
            onChange={handleChange}
          />
          Realiza ejercicio
        </label>
      </div>
      <div>
        <label>Cirugías:</label>
        <textarea
          name="surgeries"
          value={antecedentesNoPatologicos.surgeries}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AntecedentesNoPatologicos;
