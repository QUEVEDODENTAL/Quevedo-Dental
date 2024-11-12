import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h1>Bienvenido al Dashboard</h1>
        <p>Aquí puedes ver la información general y las estadísticas de tu cuenta.</p>
      </main>
    </div>
  );
};

export default Dashboard;
