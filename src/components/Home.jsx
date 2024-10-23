import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import CardsPersonal from './Cardspersonal';

const Home = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleLoginRedirect = () => {
    navigate('/login'); // Reemplaza '/login' con la ruta correcta a tu componente de Login
  };

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
              y el bienestar de nuestros pacientes. Nos destacamos por nuestra 
              pasión por la odontología innovadora y nuestro enfoque en encontrar 
              soluciones efectivas para cada necesidad dental.
            </p>
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
      <section className="nuestro-equipo-container">
        <h2 className="nuestro-equipo-title">
          Nuestro equipo
        </h2>
        <CardsPersonal />
      </section>
    </div>
  );
};

export default Home;
