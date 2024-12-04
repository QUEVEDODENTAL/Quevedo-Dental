import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { setAuth } = useAuth(); // Manejo del estado de autenticación global
  const navigate = useNavigate(); // Hook para manejar navegación
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(null); // Estado para los mensajes de error

  const handleLogin = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Asegura que se envíen cookies si las usas
      });

      if (!response.ok) {
        const errorData = await response.json(); // Extrae información del error
        throw new Error(errorData.error || 'Error en el servidor');
      }

      const data = await response.json(); // Obtiene el rol

      // Actualiza el contexto con el estado de autenticación y rol
      setAuth({
        isAuthenticated: true,
        role: data.role,
      });

      // Redirige al dashboard correspondiente según el rol
      switch (data.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'doctor':
          navigate('/doctor/dashboard');
          break;
        case 'empleado':
          navigate('/employee/dashboard');
          break;
        default:
          navigate('/'); // Fallback en caso de que el rol no coincida
          break;
      }
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

      </form>
    </div>
  );
};

export default Login;
