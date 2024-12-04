import React, { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false, role: null });

    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await fetch('http://localhost:3000/auth/validate-token', {
                    method: 'GET',
                    credentials: 'include', // Asegura que se envíen cookies
                });

                if (response.ok) {
                    const data = await response.json();
                    setAuth({
                        isAuthenticated: true,
                        role: data.role,
                    });
                } else {
                    setAuth({
                        isAuthenticated: false,
                        role: null,
                    });
                }
            } catch (error) {
                console.error('Error al validar el token:', error);
                setAuth({
                    isAuthenticated: false,
                    role: null,
                });
            }
        };

        validateToken();
    }, []); // Este useEffect solo se ejecuta una vez cuando el componente se monta

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
