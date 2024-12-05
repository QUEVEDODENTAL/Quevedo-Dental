import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import './ClientDetail.css';

const ClienteDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { auth } = useAuth(); // Obtén la información del rol del usuario
    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        const fetchCliente = async () => {
            const response = await fetch(`http://localhost:3000/clientes/${id}`);
            const data = await response.json();
            setCliente(data);
        };

        fetchCliente();
    }, [id]);

    if (!cliente) return <p>Cargando...</p>;

    // Define la ruta base en función del rol
    const baseRoute = auth.role === 'admin'
        ? '/admin/paciente'
        : auth.role === 'doctor'
            ? '/doctor/paciente'
            : '/'; // Default para empleados, si aplica

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

            <div className="divider"></div> {/* Línea divisora */}

            <div className="button-group">
                <button onClick={() => alert('Servicios')}>Servicios</button>
                <button onClick={() => alert('Carrito')}>Carrito</button>
                <button onClick={() => navigate(baseRoute)}>Regresar</button> {/* Regresar dinámico */}
            </div>
        </div>
    );
};

export default ClienteDetails;
