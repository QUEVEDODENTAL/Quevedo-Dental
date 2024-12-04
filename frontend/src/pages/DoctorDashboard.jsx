import React from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';

const DoctorDashboard = () => {
    const { auth } = useAuth();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="content">
                <h1>Bienvenido, Doctor</h1>
                <p>Rol actual: {auth.role}</p>
                <p>Aquí puedes gestionar tus pacientes y servicios.</p>
                {/* Agrega funcionalidades específicas para el doctor aquí */}
            </div>
        </div>
    );
};

export default DoctorDashboard;
