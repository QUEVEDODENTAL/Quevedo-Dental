import { useState } from 'react';

const ListaServicios = ({ servicios, onServicioEliminado, onServicioEditado }) => {
  const [editingService, setEditingService] = useState(null); // Para rastrear qué servicio se está editando
  const [editFormData, setEditFormData] = useState({ Service_Name: '', Price: '' }); // Para manejar los datos del formulario de edición

  // Maneja el clic en "Editar"
  const handleEditClick = (servicio) => {
    setEditingService(servicio.Id); // Marca el servicio como en edición
    setEditFormData({ Service_Name: servicio.Service_Name, Price: servicio.Price });
  };

  // Maneja los cambios en el formulario de edición
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Enviar los cambios al backend cuando se guarda la edición
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/servicios/edit/${editingService}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Service_Name: editFormData.Service_Name,
          Price: parseFloat(editFormData.Price),
        }),
      });

      if (response.ok) {
        onServicioEditado(); // Refresca la lista de servicios
        setEditingService(null); // Salir del modo de edición
      } else {
        console.error('Error al editar el servicio:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar la edición del servicio:', error);
    }
  };

  // Maneja la cancelación de la edición
  const handleCancelEdit = () => {
    setEditingService(null); // Cancela la edición
  };

  // Eliminar un servicio
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/servicios/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onServicioEliminado(); // Actualiza la lista
      } else {
        console.error('Error al eliminar el servicio:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
    }
  };

  return (
    <div>
      <h2>Servicios</h2>
      {servicios.map((servicio) => (
        <div key={servicio.Id} style={{ border: '1px solid #ccc', margin: '0.5rem 0', padding: '1rem' }}>
          {editingService === servicio.Id ? (
            // Formulario de edición
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="Service_Name"
                value={editFormData.Service_Name}
                onChange={handleEditChange}
                required
              />
              <input
                type="number"
                name="Price"
                value={editFormData.Price}
                onChange={handleEditChange}
                required
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleCancelEdit}>
                Cancelar
              </button>
            </form>
          ) : (
            // Vista normal del servicio
            <>
              <h3>{servicio.Service_Name}</h3>
              <p>Precio: ${servicio.Price}</p>
              <button onClick={() => handleEditClick(servicio)}>Editar</button>
              <button onClick={() => handleDelete(servicio.Id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListaServicios;
