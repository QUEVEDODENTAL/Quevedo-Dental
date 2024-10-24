import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>

      <form className="form-container">
      <p>Inicio de Sesión</p>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa el usuario"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
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
