import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleDoubleUp } from 'react-icons/fa';
import './Home.css';
import CardsPersonal from './Cardspersonal';
import Carousel from './Carousel';

const Home = () => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  const handleLoginRedirect = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/login');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - windowHeight - scrollPosition <= 160) {
        setShowScroll(false);
      } else {
        setShowScroll(scrollPosition > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container" id="home">
      {/* Sección del Banner */}
      <div className="home-banner-container">
        <div className="home-banner-content">
          <div className="home-banner-text">
            <h1 className="home-banner-title">
              Tu sonrisa, es<br />
              la luz de<br />
              nuestro<br />
              consultorio
            </h1>
            <p className="home-banner-description">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
              de las industrias desde el año 1500
            </p>
            <button className="home-banner-button" onClick={handleLoginRedirect}>
              Conócenos
            </button>
          </div>
          <div className="home-banner-placeholder">
            <h1>Imagen del doctor 1</h1>
          </div>
        </div>
      </div>

      {/* Sección Servicios */}
      <section className="home-nuestro-equipo-container" id="servicios">
        <h2 className="home-nuestro-equipo-title">Servicios</h2>
        <Carousel />
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="home-sobre-nosotros-container" id="sobre-nosotros">
        <div className="home-sobre-nosotros-content">
          <div className="home-sobre-nosotros-text">
            <h2>Sobre Nosotros</h2>
            <p>
              Somos expertos en estrategia, diseño y desarrollo dental.
              Innovadores y solucionadores de problemas. Suficientemente
              flexibles para adaptarnos a sus necesidades, pero lo suficientemente
              sólidos como para ofrecer el más alto nivel de atención.
            </p>
          </div>
          <div className="home-sobre-nosotros-images">
            <div className="home-image-placeholder">
              <h2>imagen 1</h2>
            </div>
            <div className="home-image-placeholder">
              <h2>imagen 2</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nuestro Equipo */}
      <section className="home-nuestro-equipo-container" id="nuestro-equipo">
        <h2 className="home-nuestro-equipo-title">Nuestro equipo</h2>
        <CardsPersonal />
      </section>

      {/* Botón para regresar al tope de la página */}
      {showScroll && (
        <div className="home-scroll-to-top" onClick={scrollToTop}>
          <FaAngleDoubleUp className="home-arrow-up-icon" />
        </div>
      )}
    </div>
  );
};

export default Home;