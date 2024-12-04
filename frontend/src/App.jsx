import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Register from './pages/Register';
import ClientList from './pages/ClientList';
import ClientDetails from './components/ClientDetails';
import Servicios from './pages/Servicios';
import Historial from './pages/Historial';
import Odontograma from './components/Odontograma';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

function App() {
  const location = useLocation();

  // Condiciones para mostrar Header y Footer solo en Home y Login
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <AuthProvider>
      <div style={{ display: 'flex' }}>


        <div style={{ flex: 1 }}>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/employee/dashboard" element={<EmployeeDashboard />} />



            <Route path="/perfil" element={<Perfil />} />
            <Route path="/register" element={<Register />} />
            <Route path="/clientes" element={<ClientList />} />
            <Route path="/clientes/:id" element={<ClientDetails />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/odontograma" element={<Odontograma />} />
          </Routes>

        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
