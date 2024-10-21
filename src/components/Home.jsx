import '../styles/Home.css';

const Home = () => {
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
            <button className="banner-button">Conócenos</button>
          </div>
          <div className="banner-placeholder">
            {/* Este div será el espacio para la imagen */}
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <h1>Bienvenido a Quevedo Dental</h1>
      <p>
        En nuestra clínica dental, nos dedicamos a proporcionar la mejor atención 
        a nuestros pacientes. Nuestros servicios incluyen:
      </p>
      <ul>
        <li>Exámenes dentales</li>
        <li>Blanqueamiento dental</li>
        <li>Ortodoncia</li>
        <li>Implantes dentales</li>
        <li>Y más...</li>
      </ul>
      <p>
        ¡No dudes en ponerte en contacto con nosotros para más información o para 
        agendar tu cita!
      </p>

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
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
