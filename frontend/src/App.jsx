import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';
import Perfil from './components/Perfil';
import Servicios from './components/Servicios';
import Historial from './components/Historial';
import Odontograma from './components/Odontograma';


function App() {

  const location = useLocation();

  // Verifica si la ruta actual es /dashboard o /perfil
  const isDashboardPage = location.pathname === '/dashboard';
  const isPerfilPage = location.pathname === '/perfil'; // Nueva condición para el perfil
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<Register />} />

          <Route path="/clientes" element={<ClientList />} />
          <Route path="/clientes/:id" element={<ClientDetails />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="odontograma" element={<Odontograma />} />

          <Route path="/perfil" element={<Perfil />} /> {/* Agrega la ruta para el perfil */}
        </Routes>

        {/* Solo muestra el Footer si no estamos en /perfil */}
        {!isPerfilPage && !isDashboardPage && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
