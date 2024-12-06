import './CardsPersonal.css';

const CardsPersonal = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-image">
          <img
            src="/assets/dentista1.jpg"
            alt="Dr. Andres Talamantes"
            className="card-img"
          />
        </div>
        <h3 className="card-title">Dr. Andres Talamantes</h3>
        <span className="card-subtitle">Cirujano Dental</span>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="/assets/dentista2.jpg"
            alt="Dr. Fabian"
            className="card-img"
          />
        </div>
        <h3 className="card-title">Dr. Fabian</h3>
        <span className="card-subtitle">Cirujano Dental</span>
      </div>
    </div>
  );
};

export default CardsPersonal;
