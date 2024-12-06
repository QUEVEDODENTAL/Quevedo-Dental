import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const DoctorPage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar persistente */}
            <Sidebar />

            {/* Contenido dinámico */}
            <div style={{ flex: 1, padding: '1rem',}}>
                <Outlet />
            </div>
        </div>
    );
};

export default DoctorPage;

