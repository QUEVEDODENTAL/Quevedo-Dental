import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="combined-logo">
        <div className="logo-container">
          <div className="logo">Quevedo</div>
          <div className="logo2">Dental</div>
        </div>
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Inicio</Link></li>
          <li className="nav-item"><Link to="/#servicios">Servicios</Link></li>
          <li className="nav-item"><Link to="/#nuestro-equipo">Nuestro equipo</Link></li>
          <li className="nav-item"><Link to="/#sobre-nosotros">Sobre nosotros</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
