import { useState, useEffect } from "react";
import AntecedentesPatologicos from "./Antecedentespatologicos";
import AntecedentesNoPatologicos from "./Antecedentesnopatologicos";
import Enfermedades from "./Enfermedades";
import ExamenClinicoIntraoral from "./Examenclinicointraoral";
import Odontograma from "./Odontograma";
import './Historial.css';

const Historial = () => {
  const [pacienteId, setPacienteId] = useState("");
  const [pacienteNombre, setPacienteNombre] = useState("");

  // Función para actualizar el nombre del paciente basado en el ID
  const fetchPacienteData = async (id) => {
    if (!id) return;
    // Simula una llamada a una API para obtener el nombre del paciente
    // Aquí podrías hacer un fetch a tu backend, por ejemplo:
    // const response = await fetch(`/api/pacientes/${id}`);
    // const data = await response.json();
    const pacienteData = { nombre: "Ejemplo Paciente" }; // Simulación de datos
    setPacienteNombre(pacienteData.nombre);
  };

  useEffect(() => {
    fetchPacienteData(pacienteId);
  }, [pacienteId]);

  return (
    <div className="historial-container">
      <div className="main-content"> {/* Contenedor principal del contenido */}
        <h1>Historial Clínico</h1>
        <div className="bg-card">
          <div className="paciente-selector">
            <label htmlFor="paciente">Nombre del Paciente:</label>
            <input
              type="text"
              id="paciente"
              value={pacienteId}
              onChange={(e) => setPacienteId(e.target.value)}
              placeholder="Ingrese el nombre del paciente"
            />
          </div>
          {pacienteNombre && (
            <p><strong>Nombre del Paciente:</strong> {pacienteNombre}</p>
          )}
        </div>

        <div className="bg-card">
          <AntecedentesPatologicos pacienteId={pacienteId} />
        </div>

        <div className="bg-card">
          <AntecedentesNoPatologicos pacienteId={pacienteId} />
        </div>
        <div className="bg-card">
          <Odontograma pacienteId={ pacienteId} /> 
        </div>


        <div className="bg-card">
          <Enfermedades pacienteId={pacienteId} />
        </div>

        <div className="bg-card">
          <ExamenClinicoIntraoral pacienteId={pacienteId} />
        </div>
      </div>
    </div>
  );
};

export default Historial;