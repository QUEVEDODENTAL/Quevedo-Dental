import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Obtén la posición de la sección y ajusta hacia arriba
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - 50; // Ajuste de 100 píxeles hacia arriba

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Ajuste de tiempo para asegurar que Home se cargue antes de desplazar
  };

  return (
    <header className="header">
      <div className="combined-logo" onClick={() => scrollToSection('home')}>
        <div className="logo-container">
          <div className="logo">Quevedo</div>
          <div className="logo2">Dental</div>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item" onClick={() => scrollToSection('home')}>Inicio</li>
          <li className="nav-item" onClick={() => scrollToSection('servicios')}>Servicios</li>
          <li className="nav-item" onClick={() => scrollToSection('sobre-nosotros')}>Sobre nosotros</li>
          <li className="nav-item" onClick={() => scrollToSection('nuestro-equipo')}>Nuestro equipo</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
