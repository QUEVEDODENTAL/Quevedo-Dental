import { Routes, Route } from 'react-router-dom';  // Quitar BrowserRouter (Router)
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
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
import PrivateRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas protegidas */}
            <Route path="/admin/dashboard" element={
              <PrivateRoute element={<AdminDashboard />} role="admin" />
            } />
            <Route path="/doctor/dashboard" element={
              <PrivateRoute element={<DoctorDashboard />} role="doctor" />
            } />
            <Route path="/employee/dashboard" element={
              <PrivateRoute element={<EmployeeDashboard />} role="employee" />
            } />



            {/* Otras rutas */}
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
