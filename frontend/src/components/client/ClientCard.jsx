import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientCard.css';


const ClienteCard = ({ cliente }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/clientes/${cliente.id}`);
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
