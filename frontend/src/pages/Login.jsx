import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useState } from 'react'; // Importación de React y el hook useState para manejar estado local
import { useAuth } from '../context/AuthContext'; // Hook personalizado para manejar el contexto de autenticación
=======
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
>>>>>>> Frontend

const Login = () => {
  const { setAuth } = useAuth(); // Manejo del estado de autenticación global
  const navigate = useNavigate(); // Hook para manejar navegación
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(null); // Estado para los mensajes de error

  const handleReturn = () => {
    navigate('/'); // Redirige a la página principal al cancelar
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas'); // Manejo de errores en la respuesta
      }

      setAuth(true); // Actualiza el estado de autenticación
      navigate('/dashboard'); // Redirige al dashboard
    } catch (error) {
      console.error('Error en el login:', error);
      setError(error.message); // Actualiza el mensaje de error en la UI
    }
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>
      <form className="form-container" onSubmit={handleLogin}>
        <p>Por favor, ingresa tus datos:</p>
        {error && <p className="error-message">{error}</p>} {/* Mensaje de error si existe */}
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className="login-button">Iniciar Sesión</button>
        <hr className="login-divider" />
        <button type="button" className="return-button" onClick={handleReturn}>
          Regresar
        </button>
      </form>
    </div>
  );
};

export default Login;
