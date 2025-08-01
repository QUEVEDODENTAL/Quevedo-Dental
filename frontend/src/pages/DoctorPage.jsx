import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const DoctorPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar persistente */}
            <Sidebar />

            {/* Contenido dinámico */}
            <div style={{ flex: 1}}>
                <Outlet />
            </div>
        </div>
    );
};

export default DoctorPage;

