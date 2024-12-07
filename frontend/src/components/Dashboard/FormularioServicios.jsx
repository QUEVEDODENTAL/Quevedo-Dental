import { useState } from 'react';

const FormularioServicios = ({ onServicioCreado }) => {
  const [formData, setFormData] = useState({ Service_Name: '', Price: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/servicios/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ Service_Name: '', Price: '' }); // Reinicia el formulario
        onServicioCreado(); // Actualiza la lista de servicios
      } else {
        console.error('Error al crear el servicio:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar el servicio:', error);
    }
  };

  return (
    <div>
      <h2>Crear Servicio</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del servicio"
          value={formData.Service_Name}
          onChange={(e) => setFormData({ ...formData, Service_Name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          step="0.01"
          value={formData.Price}
          onChange={(e) => setFormData({ ...formData, Price: e.target.value })}
          required
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default FormularioServicios;
