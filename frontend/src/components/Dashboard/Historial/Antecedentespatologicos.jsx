import React, { useState } from "react";
import './AntecedentesPatologicos.css';

const AntecedentesPatologicos = ({ pacienteId }) => {
  const [antecedentesPatologicos, setAntecedentesPatologicos] = useState({
    smoking: false,
    substanceAbuse: false,
    alcoholism: false,
    sedentary: false,
    surgeries: "",
    exercise: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setAntecedentesPatologicos({
      ...antecedentesPatologicos,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Datos enviados:",
      antecedentesPatologicos,
      "Paciente ID:",
      pacienteId
    );
    // Aquí puedes enviar los datos al backend
  };

  return (
    <form onSubmit={handleSubmit} className="antecedentes-patologicos">
      <h2>Antecedentes Patológicos</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="smoking"
            checked={antecedentesPatologicos.smoking}
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
            checked={antecedentesPatologicos.substanceAbuse}
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
            checked={antecedentesPatologicos.alcoholism}
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
            checked={antecedentesPatologicos.sedentary}
            onChange={handleChange}
          />
          Sedentarismo
        </label>
        <label>
          <input
            type="checkbox"
            name="exercise"
            checked={antecedentesPatologicos.exercise}
            onChange={handleChange}
          />
          Realiza ejercicio
        </label>
      </div>
      <div>
        <label>Cirugías:</label>
        <textarea
          name="surgeries"
          value={antecedentesPatologicos.surgeries}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AntecedentesPatologicos;
