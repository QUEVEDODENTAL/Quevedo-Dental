import { Routes, Route } from 'react-router-dom';  // Quitar BrowserRouter (Router)
import { AuthProvider } from './context/AuthContext';
import Perfil from './components/Dashboard/Perfil';
import Register from './components/register/Register';
import ClientList from './components/client/ClientList';
import Servicios from './components/Dashboard/Servicios';
import Historial from './components/Dashboard/Historial/Historial';
import PrivateRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import Dashboard from './components/Dashboard/Dashboard';
import DoctorPage from './pages/DoctorPage';
import EmployeePage from './pages/EmployeePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <AuthProvider>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas protegidas */}
            <Route
              path="/admin/*"
              element={<PrivateRoute element={<AdminPage />} role="admin" />}
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="paciente" element={<ClientList />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="register" element={<Register />} />
              <Route path="historial" element={<Historial />} />
              <Route path="servicios" element={<Servicios />} />
            </Route>

            <Route
              path="/doctor/*"
              element={<PrivateRoute element={<DoctorPage />} role="doctor" />}
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="paciente" element={<ClientList />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="historial" element={<Historial />} />
              <Route path="servicios" element={<Servicios />} />
            </Route>

            <Route
              path="/employee/*"
              element={<PrivateRoute element={<EmployeePage />} role="employee" />}
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="servicios" element={<Servicios />} />
            </Route>


          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
