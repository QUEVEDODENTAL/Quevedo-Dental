import { useEffect, useState } from 'react';
import ClienteCard from '../components/ClientCard';
import Sidebar from '../components/Sidebar';

import '../styles/ClientList.css';


const ClientesList = () => {
    const [clientes, setClientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:3000/clientes');
                const data = await response.json();
                setClientes(data);
            } catch (error) {
                console.error("Error al cargar los clientes:", error);
            }
        };

        fetchClientes();
    }, []);

    // Función para remover acentos
    const normalizeText = (text) => {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };

    // Filtrar clientes según nombre y apelldo
    const filteredClientes = clientes.filter(cliente => {
        const fullName = `${cliente.Name} ${cliente.LastName}`;
        return normalizeText(fullName).includes(normalizeText(searchTerm));
    });


    return (
        <div className="clientes-list-container">
            <Sidebar />
            <h1>Lista de Clientes</h1>

            {/* Input de búsqueda */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar cliente por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Mostrar mensaje si no hay clientes */}
            {clientes.length === 0 ? (
                <p className="no-clients-message">No hay clientes registrados.</p>
            ) : filteredClientes.length === 0 ? (
                <p className="no-clients-message">No se encontraron clientes.</p>
            ) : (
                <div className="clientes-list">
                    {filteredClientes.map(cliente => (
                        <ClienteCard key={cliente.id} cliente={cliente} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClientesList;
