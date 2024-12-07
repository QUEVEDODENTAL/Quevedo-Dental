import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import './ClientDetail.css';
import ListaServicios from './ListaServicios';
import Carrito from './Carrito';

const ClienteDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { auth } = useAuth();
    const [cliente, setCliente] = useState(null);
    const [servicios, setServicios] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [mostrarServicios, setMostrarServicios] = useState(true);

    useEffect(() => {
        const fetchCliente = async () => {
            const response = await fetch(`http://localhost:3000/clientes/${id}`);
            const data = await response.json();
            setCliente(data);
        };

        const fetchServicios = async () => {
            const response = await fetch('http://localhost:3000/servicios/view');
            const data = await response.json();
            setServicios(data);
        };

        fetchCliente();
        fetchServicios();
    }, [id]);

    const agregarAlCarrito = async (servicio) => {
        try {
            const response = await fetch('http://localhost:3000/carrito/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cliente_id: cliente.id,
                    service_name: servicio.Service_Name,
                    price: servicio.Price,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setCarrito([...carrito, data]);
            } else {
                console.error('Error al agregar el servicio al carrito');
            }
        } catch (error) {
            console.error('Error al guardar el servicio:', error);
        }
    };

    const onServicioEditado = () => {
        const fetchServicios = async () => {
            const response = await fetch('http://localhost:3000/servicios/view');
            const data = await response.json();
            setServicios(data);
        };

        fetchServicios();
    };


    const cambiarVista = () => {
        setMostrarServicios(!mostrarServicios);
    };

    const baseRoute = auth.role === 'admin'
        ? '/admin/paciente'
        : auth.role === 'doctor'
            ? '/doctor/paciente'
            : '/';

    if (!cliente) return <p>Cargando...</p>;

    return (
        <div className="cliente-details-container">
            <h2>{cliente.Name} {cliente.LastName}</h2>
            <p>Género: {cliente.SEX}</p>
            <p>Edad: {cliente.Age}</p>
            <p>Fecha de nacimiento: {cliente.BirthDate}</p>
            <p>Dirección: {cliente.Address}</p>
            <p>Teléfono: {cliente.Phone}</p>
            <p>CURP: {cliente.CURP}</p>
            <p>Email: {cliente.Email}</p>
            <p>Tipo de Sangre: {cliente.BloodType}</p>
            <p>Ocupación: {cliente.Occupation}</p>
            <p>Educación: {cliente.Education}</p>

            <div className="divider"></div>

            <div className="button-group">
                <button onClick={cambiarVista}>{mostrarServicios ? 'Ver Carrito' : 'Ver Servicios'}</button>
                <button onClick={() => navigate(baseRoute)}>Regresar</button>
            </div>
            {/* Contenedor con scroll */}
            <div className="scrollable-container">
                {mostrarServicios ? (
                    <ListaServicios
                        servicios={servicios}
                        onServicioEditado={onServicioEditado}
                        onServicioEliminado={() => { }}
                        onAgregarAlCarrito={agregarAlCarrito}
                    />
                ) : (
                    <Carrito
                        cliente={cliente}
                    />
                )}
            </div>
        </div>
    );
};

export default ClienteDetails;
