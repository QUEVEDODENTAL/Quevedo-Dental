import React, { useState, useEffect } from 'react';

const Carrito = ({ cliente }) => {
    const [serviciosGuardados, setServiciosGuardados] = useState([]);

    const fetchServiciosGuardados = async () => {
        if (!cliente) {
            console.error('Cliente no está definido');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/carrito/view/${cliente.id}`);
            const data = await response.json();
            setServiciosGuardados(data);
        } catch (error) {
            console.error('Error al obtener los servicios guardados:', error);
        }
    };

    const eliminarDelCarrito = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/carrito/eliminar/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (response.ok) {
                console.log(data.message);

                setServiciosGuardados(serviciosGuardados.filter((servicio) => servicio.id !== id));
            } else {
                console.error('Error al eliminar el servicio:', data.message);
            }
        } catch (error) {
            console.error('Error al eliminar el servicio:', error);
        }
    };

    const calcularTotal = () => {
        return serviciosGuardados.reduce((total, servicio) => {
            return total + (parseFloat(servicio.price) || 0);
        }, 0);
    };




    useEffect(() => {
        fetchServiciosGuardados();
    }, [cliente]);


    return (
        <div>
            <h3>Servicios en el carrito</h3>
            <div>
                {serviciosGuardados.length > 0 ? (
                    serviciosGuardados.map((servicio) => (
                        <div key={servicio.id}>
                            <h3>{servicio.service_name}</h3>
                            <p>${servicio.price}</p>
                            <button onClick={() => eliminarDelCarrito(servicio.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay servicios en el carrito</p>
                )}
            </div>
            <h4>Total: ${calcularTotal().toFixed(2)}</h4>
        </div>
    );
};

export default Carrito;
