import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <h1>Bienvenido al Dashboard del Dr. Quevedo</h1>
        <p className="eslogan">
          Tu sonrisa es la luz de nuestro consultorio
        </p>

        {/* Cuadro decorativo */}
        <div className="highlight-box">
          <p>Aquí podrá estar un mapa de la ubicación del dentista</p>
        </div>

        {/* Sección de Opiniones */}
        <section className="dashboard-section">
          <h2>Opiniones de los Pacientes</h2>
          <div className="opinions-container">
            {/* Tarjetas de opiniones */}
            {[
              { name: 'María Pérez', opinion: '¡El mejor dentista que he visitado! Muy profesional y amable.' },
              { name: 'Juan López', opinion: 'La atención fue excelente, y las instalaciones están muy limpias.' },
            ].map((opinion, index) => (
              <div className="opinion-card" key={index}>
                <h3>{opinion.name}</h3>
                <p>{opinion.opinion}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
