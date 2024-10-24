import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa'; // Importa el icono de la flecha
import '../styles/Home.css';
import CardsPersonal from './Cardspersonal';

const Home = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Sección del Banner */}
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-title">
              Tu sonrisa, es<br />
              la luz de<br />
              nuestro<br />
              consultorio
            </h1>
            <p className="banner-description">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
              de las industrias desde el año 1500
            </p>
            <button className="banner-button" onClick={handleLoginRedirect}>
              Conócenos
            </button>
          </div>
          <div className="banner-placeholder">
            <h1>
              Imagen del doctor 1
            </h1>
          </div>
        </div>
      </div>

      {/* Sección Sobre Nosotros */}
      <section className="sobre-nosotros-container">
        <div className="sobre-nosotros-content">
          <div className="sobre-nosotros-text">
            <h2>Sobre Nosotros</h2>
            <p>
              Somos un equipo de especialistas comprometidos con la salud bucal 
              y el bienestar de nuestros pacientes...
            </p>
          </div>
          <div className="sobre-nosotros-images">
            <div className="image-placeholder">
              <h2>
                imagen 1
              </h2>
            </div>
            <div className="image-placeholder">
              <h2>
                imagen 2
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nuestro Equipo */}
      <section className="nuestro-equipo-container">
        <h2 className="nuestro-equipo-title">
          Nuestro equipo
        </h2>
        <CardsPersonal />
      </section>

      {/* Botón para regresar al tope de la página */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp className="arrow-up-icon" />
        </div>
      )}
    </div>
  );
};

export default Home;
