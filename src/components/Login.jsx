import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>

      <form>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
