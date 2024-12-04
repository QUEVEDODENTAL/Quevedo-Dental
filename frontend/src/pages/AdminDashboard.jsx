import React from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
    const { auth } = useAuth();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="content">
                <h1>Bienvenido, Administrador</h1>
                <p>Rol actual: {auth.role}</p>
                <p>Aquí puedes gestionar usuarios, revisar historiales y más.</p>
                {/* Agrega funcionalidad específica del administrador aquí */}
            </div>
        </div>
    );
};

export default AdminDashboard;
