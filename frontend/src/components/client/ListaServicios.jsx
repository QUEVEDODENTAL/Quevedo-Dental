import { useState } from 'react';

const ListaServicios = ({ servicios, onServicioEditado, onServicioEliminado, onAgregarAlCarrito }) => {
    const [editingService, setEditingService] = useState(null);
    const [editFormData, setEditFormData] = useState({ Price: '' });

    const handleEditClick = (servicio) => {
        setEditingService(servicio.Id);
        setEditFormData({ Price: servicio.Price });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/servicios/edit/${editingService}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Price: parseFloat(editFormData.Price),
                }),
            });

            if (response.ok) {
                // Llamar a la función para recargar los servicios después de la edición
                onServicioEditado();
                setEditingService(null);  // Reseteamos el servicio que está siendo editado
            } else {
                console.error('Error al editar el servicio:', response.statusText);
            }
        } catch (error) {
            console.error('Error al enviar la edición del servicio:', error);
        }
    };


    const handleCancelEdit = () => {
        setEditingService(null);
    };


    return (
        <div className="servicios-container">
            <h2>Servicios Disponibles</h2>
            <div className="service-cards">
                {servicios.map((servicio) => (
                    <div key={servicio.Id} className="service-card">
                        {editingService === servicio.Id ? (
                            // Formulario de edición
                            <form onSubmit={handleEditSubmit} className="edit-form">
                                <input
                                    type="number"
                                    name="Price"
                                    value={editFormData.Price}
                                    onChange={handleEditChange}
                                    required
                                    placeholder="Nuevo Precio"
                                />
                                <button type="submit">Guardar</button>
                                <button type="button" onClick={handleCancelEdit}>
                                    Cancelar
                                </button>
                            </form>
                        ) : (
                            // Vista normal del servicio
                            <div className="service-info">
                                <h3>{servicio.Service_Name}</h3>
                                <p>Precio: ${isNaN(servicio.Price) ? 'N/A' : parseFloat(servicio.Price).toFixed(2)}</p>
                                <div className="service-actions">
                                    <button onClick={() => handleEditClick(servicio)}>Editar Precio</button>
                                    <button onClick={() => onAgregarAlCarrito(servicio)}>Agregar al Carrito</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaServicios;
