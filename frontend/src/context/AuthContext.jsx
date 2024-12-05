import React, { createContext, useContext, useState, useEffect } from 'react';

// Contexto de autenticación
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const savedAuth = localStorage.getItem('auth');
        return savedAuth ? JSON.parse(savedAuth) : { isAuthenticated: false, role: null };
    });

    useEffect(() => {
        const validateToken = async () => {
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
                    setAuth({
                        isAuthenticated: false,
                        role: null,
                    });
                    localStorage.removeItem('auth');
                }
            } catch (error) {
                console.error('Error al validar el token:', error);
                setAuth({
                    isAuthenticated: false,
                    role: null,
                });
                localStorage.removeItem('auth');
            }
        };

        validateToken();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
