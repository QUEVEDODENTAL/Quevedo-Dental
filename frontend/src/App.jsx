import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Perfil from './components/Perfil'; // Importa el componente Perfil

function App() {
  const location = useLocation();
  
  // Verifica si la ruta actual es /dashboard o /perfil
  const isDashboardPage = location.pathname === '/dashboard';
  const isPerfilPage = location.pathname === '/perfil'; // Nueva condición para el perfil

  return (
    <AuthProvider>
      <div>
        {/* Solo muestra el Header si no estamos en /perfil */}
        {!isPerfilPage && !isDashboardPage && <Header />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/perfil" element={<Perfil />} /> {/* Agrega la ruta para el perfil */}
        </Routes>
        
        {/* Solo muestra el Footer si no estamos en /perfil */}
        {!isPerfilPage && !isDashboardPage && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
