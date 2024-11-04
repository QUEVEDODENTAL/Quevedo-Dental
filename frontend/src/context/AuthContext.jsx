import React, { createContext, useContext, useEffect, useState } from 'react';

// Creamos un contexto para la autenticación
const AuthContext = createContext();

// Definimos el componente `AuthProvider`, que envuelve la aplicación o partes de ella
export const AuthProvider = ({ children }) => {
    // Estado de autenticación, inicializado como `false` (no autenticado)
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        // Esta función se ejecuta cuando el componente se monta.
        // Se encarga de verificar si el usuario tiene una sesión activa.
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:3000/protected-route', {
                    credentials: 'include', // Incluye cookies en la solicitud
                });
                setAuth(response.ok); // Si la respuesta es exitosa (200), actualiza `auth` a `true`
            } catch (error) {
                console.error("Error verifying auth:", error);
                setAuth(false); // Si ocurre un error, asegura que `auth` sea `false`
            }
        };

        checkAuth(); // Llamada inicial para verificar el estado de autenticación al cargar
    }, []);

    return (
        // Proveedor que envuelve a los hijos y permite que accedan al valor de `auth` y a la función `setAuth`
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook `useAuth` para acceder fácilmente a los valores de `AuthContext`
export const useAuth = () => useContext(AuthContext);
