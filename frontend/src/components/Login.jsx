import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; // Importación de React y el hook useState para manejar estado local
import { useAuth } from '../context/AuthContext'; // Hook personalizado para manejar el contexto de autenticación

const Login = () => {
  const { setAuth } = useAuth(); // Hook para actualizar el estado de autenticación global
  const navigate = useNavigate(); // Hook de navegación
  const [email, setEmail] = useState(''); // Estado local para almacenar el correo electrónico ingresado
  const [password, setPassword] = useState(''); // Estado local para almacenar la contraseña ingresada
  const [error, setError] = useState(null); // Estado para manejar y mostrar mensajes de error

  // Maneja la redirección al inicio en caso de cancelar el login
  const handleReturn = () => {
    navigate('/'); // Navega a la página principal
  };

  // Función que se ejecuta al enviar el formulario
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene la recarga de página por defecto al enviar el formulario

    try {
      // Realiza una solicitud POST al backend para autenticar al usuario
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Especifica que los datos enviados son JSON
        },
        body: JSON.stringify({ email, password }), // Envía los datos de usuario como un JSON
        credentials: 'include', // Permite incluir cookies en la solicitud
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, arroja un error 
        throw new Error('Credenciales invalidas');
      }
      console.log('Login successful:'); // Mensaje de éxito en consola

      setAuth(true); // Actualiza el estado de autenticación global a "true"
      navigate('/dashboard'); // Navega a la página protegida del dashboard
    } catch (error) {
      // Maneja cualquier error en el proceso de login, muestra el mensaje de error
      console.error('Error en el login:', error);
      setError(error.message); // Actualiza el estado de error para mostrar un mensaje en la UI
    }
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>

      <form className="form-container" onSubmit={handleLogin}>
        <p>Inicio de Sesión</p>
        {error && <p className="error-message">{error}</p>} {/* Muestra el mensaje de error si hay */}

        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="username"
            name="username"
            placeholder="Ingresa el usuario"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Ingresa la contraseña"
            required
          />
        </div>

        <button type="submit" className="login-button">Iniciar Sesión</button>
        <hr className="login-divider" />
        <button type="button" className="return-button" onClick={handleReturn}>Regresar</button>
      </form>
    </div>
  );
};

export default Login;
