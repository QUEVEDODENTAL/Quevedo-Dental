import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>

      <form className="form-container">
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
        <hr className="login-divider" />
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
