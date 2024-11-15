import React, { useEffect, useState } from 'react';
import ClienteCard from './ClientCard';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            const response = await fetch('http://localhost:3000/clientes');
            const data = await response.json();
            setClientes(data);
        };

        fetchClientes();
    }, []);

    return (
        <div className="clientes-list">
            {clientes.map(cliente => (
                <ClienteCard key={cliente.id} cliente={cliente} />
            ))}
        </div>
    );
};

export default ClientesList;
