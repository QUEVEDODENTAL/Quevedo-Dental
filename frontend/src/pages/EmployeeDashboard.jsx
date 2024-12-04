import React from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

const EmployeeDashboard = () => {
    const { auth } = useAuth();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="content">
                <h1>Bienvenido, Empleado</h1>
                <p>Rol actual: {auth.role}</p>
                <p>Aquí puedes gestionar tu perfil y otras tareas relacionadas.</p>
                {/* Agrega funcionalidades específicas para el empleado aquí */}
            </div>
        </div>
    );
};

export default EmployeeDashboard;
