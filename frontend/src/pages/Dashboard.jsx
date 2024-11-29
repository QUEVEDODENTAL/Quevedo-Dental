import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <h1>Bienvenido al Dashboard del Dr. Quevedo</h1>
        <p className='eslogan'>
          Tu sonrisa, es la luz de nuestro consultorio
        </p>

        {/* Cuadro decorativo */}
        <div className="highlight-box">
          <p>Aqui podra estar un mapa de la ubicacion del dentista</p>
        </div>

        {/* Sección de Opiniones */}
        <section className="dashboard-section">
          <h2>Opiniones de los Pacientes</h2>
          <div className="opinions-container">
            <div className="opinion-card">
              <h3>María Pérez</h3>
              <p>¡El mejor dentista que he visitado! Muy profesional y amable.</p>
            </div>
            <div className="opinion-card">
              <h3>Juan López</h3>
              <p>La atención fue excelente, y las instalaciones están muy limpias.</p>
            </div>
            <div className="opinion-card">
              <h3>Juan López</h3>
              <p>La atención fue excelente, y las instalaciones están muy limpias.</p>
            </div>
            <div className="opinion-card">
              <h3>María Pérez</h3>
              <p>¡El mejor dentista que he visitado! Muy profesional y amable.</p>
            </div>
            <div className="opinion-card">
              <h3>Juan López</h3>
              <p>La atención fue excelente, y las instalaciones están muy limpias.</p>
            </div>
            <div className="opinion-card">
              <h3>Juan López</h3>
              <p>La atención fue excelente, y las instalaciones están muy limpias.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;