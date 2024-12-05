import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar persistente */}
            <Sidebar />

            {/* Contenido dinámico */}
            <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f5f5f5' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminPage;

