import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Component, role, ...rest }) => {
    const { auth } = useAuth();

    // Si no está autenticado, redirigir al login
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Si el rol no coincide, redirigir a una página de acceso no autorizado
    if (auth.role !== role) {
        return <Navigate to="/unauthorized" />;
    }

    // Si está autenticado y tiene el rol correcto, renderiza el componente
    return <>{Component}</>;
};

export default PrivateRoute;
