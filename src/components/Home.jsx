import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleDoubleUp } from 'react-icons/fa';
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
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight; // Altura de la ventana
      const documentHeight = document.documentElement.scrollHeight; // Altura total del documento

      // Comprobamos si estamos a menos de 20 píxeles del final
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

      {/* Sección Servicios (pendiente) */}
      <section className="nuestro-equipo-container" id='servicios'>
        <h2 className="nuestro-equipo-title">
          Servicios
        </h2>
        <p>
          Pendiente
        </p>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="sobre-nosotros-container" id='sobre-nosotros'>
        <div className="sobre-nosotros-content">
          <div className="sobre-nosotros-text">
            <h2>Sobre Nosotros</h2>
            <p>
            Somos expertos en estrategia, diseño y desarrollo dental. 
              Innovadores y solucionadores de problemas. Suficientemente 
              flexibles para adaptarnos a sus necesidades, pero lo suficientemente 
              sólidos como para ofrecer el más alto nivel de atención.
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
      <section className="nuestro-equipo-container" id='nuestro-equipo'>
        <h2 className="nuestro-equipo-title">
          Nuestro equipo
        </h2>
        <CardsPersonal />
      </section>

      {/* Botón para regresar al tope de la página */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaAngleDoubleUp className="arrow-up-icon" />
        </div>
      )}
    </div>
  );
};

export default Home;
