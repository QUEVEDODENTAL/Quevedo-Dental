import React, { useState } from "react";
import "../styles/Odontograma.css";

const dientes = [
  { number: 18, src: "/assets/dientes/dentadura-sup-18.svg" },
  { number: 17, src: "/assets/dientes/dentadura-sup-17.svg" },
  { number: 16, src: "/assets/dientes/dentadura-sup-16.svg" },
  { number: 15, src: "/assets/dientes/dentadura-sup-15.svg" },
  { number: 14, src: "/assets/dientes/dentadura-sup-14.svg" },
  { number: 13, src: "/assets/dientes/dentadura-sup-13.svg" },
  { number: 12, src: "/assets/dientes/dentadura-sup-12.svg" },
  { number: 11, src: "/assets/dientes/dentadura-sup-11.svg" },
  { number: 21, src: "/assets/dientes/dentadura-sup-21.svg" },
  { number: 22, src: "/assets/dientes/dentadura-sup-22.svg" },
  { number: 23, src: "/assets/dientes/dentadura-sup-23.svg" },
  { number: 24, src: "/assets/dientes/dentadura-sup-24.svg" },
  { number: 25, src: "/assets/dientes/dentadura-sup-25.svg" },
  { number: 26, src: "/assets/dientes/dentadura-sup-26.svg" },
  { number: 27, src: "/assets/dientes/dentadura-sup-27.svg" },
  { number: 28, src: "/assets/dientes/dentadura-sup-28.svg" },
  { number: 48, src: "/assets/dientes/dentadura-inf-48.svg" },
  { number: 47, src: "/assets/dientes/dentadura-inf-47.svg" },
  { number: 46, src: "/assets/dientes/dentadura-inf-46.svg" },
  { number: 45, src: "/assets/dientes/dentadura-inf-45.svg" },
  { number: 44, src: "/assets/dientes/dentadura-inf-44.svg" },
  { number: 43, src: "/assets/dientes/dentadura-inf-43.svg" },
  { number: 42, src: "/assets/dientes/dentadura-inf-42.svg" },
  { number: 41, src: "/assets/dientes/dentadura-inf-41.svg" },
  { number: 31, src: "/assets/dientes/dentadura-inf-31.svg" },
  { number: 32, src: "/assets/dientes/dentadura-inf-32.svg" },
  { number: 33, src: "/assets/dientes/dentadura-inf-33.svg" },
  { number: 34, src: "/assets/dientes/dentadura-inf-34.svg" },
  { number: 35, src: "/assets/dientes/dentadura-inf-35.svg" },
  { number: 36, src: "/assets/dientes/dentadura-inf-36.svg" },
  { number: 37, src: "/assets/dientes/dentadura-inf-37.svg" },
  { number: 38, src: "/assets/dientes/dentadura-inf-38.svg" },
];

const Odontograma = () => {
  const [dienteEstado, setDienteEstado] = useState({});

  const handleClick = (number) => {
    setDienteEstado((prev) => ({
      ...prev,
      [number]: prev[number] === "dañado" ? "sano" : "dañado",
    }));
  };

  const renderFila = (numeros) => {
    return numeros.map((number) => {
      const diente = dientes.find((d) => d.number === number);
      if (!diente) return null;
      return (
        <div
          key={diente.number}
          className={`odontograma-item ${dienteEstado[diente.number] || "sano"}`}
          onClick={() => handleClick(diente.number)}
        >
          <img src={diente.src} alt={`Diente ${diente.number}`} />
          <p>{diente.number}</p>
        </div>
      );
    });
  };

  return (
    <div className="odontograma-container">
      <h2>Odontograma</h2>
      {/* Fila superior (dientes superiores en una sola fila) */}
      <div className="fila-dientes fila-superior">
        {renderFila([18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28])}
      </div>
      {/* Fila inferior (dientes inferiores en una sola fila) */}
      <div className="fila-dientes fila-inferior">
        {renderFila([48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38])}
      </div>
    </div>
  );
};

export default Odontograma;
