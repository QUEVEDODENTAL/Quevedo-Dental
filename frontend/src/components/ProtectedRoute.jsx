import React from 'react';
import { Navigate } from 'react-router-dom'; // Para redireccionar a otra ruta
import { useAuth } from '../context/AuthContext'; // Hook personalizado para acceder al contexto de autenticación

// Componente `ProtectedRoute` para restringir acceso a rutas según el estado de autenticación
const ProtectedRoute = ({ children }) => {
    // Accede al valor `auth` del contexto de autenticación
    const { auth } = useAuth();

    // Si `auth` es `false`, redirige a la página de login
    if (!auth) {
        return <Navigate to="/login" />;
    }

    // Si `auth` es `true`, renderiza el contenido protegido (los `children`)
    return children;
};

export default ProtectedRoute;
