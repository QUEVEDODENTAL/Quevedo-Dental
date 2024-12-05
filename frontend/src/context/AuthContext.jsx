import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const savedAuth = localStorage.getItem('auth');
        return savedAuth ? JSON.parse(savedAuth) : { isAuthenticated: false, role: null };
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('auth');
            if (!token) {
                console.warn('No hay token presente. Usuario no autenticado.');
                setAuth({ isAuthenticated: false, role: null });
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/auth/validate-token', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setAuth({
                        isAuthenticated: true,
                        role: data.role,
                    });
                    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, role: data.role }));
                } else {
                    console.warn('Token inválido o sesión expirada.');
                    setAuth({ isAuthenticated: false, role: null });
                    localStorage.removeItem('auth');
                }
            } catch (error) {
                console.error('Error al validar el token:', error);
                setAuth({ isAuthenticated: false, role: null });
                localStorage.removeItem('auth');
            } finally {
                setLoading(false);
            }
        };

        if (!auth.isAuthenticated) {
            validateToken();
        } else {
            setLoading(false);
        }
    }, [auth.isAuthenticated]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
