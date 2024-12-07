import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientCard.css';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de importar el contexto

const ClienteCard = ({ cliente }) => {
    const navigate = useNavigate();
    const { auth } = useAuth(); // Accede al estado de autenticación, que debe tener el rol

    const handleCardClick = () => {
        if (auth?.role === 'admin') {
            navigate(`/admin/paciente/${cliente.id}`);
        } else if (auth?.role === 'doctor') {
            navigate(`/doctor/paciente/${cliente.id}`);
        } else {
            navigate(`/`);
        }
    };

    return (
        <div className="cliente-card" onClick={handleCardClick}>
            <h3>{cliente.Name} {cliente.LastName}</h3>
            <p>Género: {cliente.SEX}</p>
            <p>Teléfono: {cliente.Phone}</p>
            <p>Email: {cliente.Email}</p>
        </div>
    );
};

export default ClienteCard;
