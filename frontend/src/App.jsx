import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/dashboard';
  const isPerfilPage = location.pathname === '/perfil';

  return (
    <AuthProvider>
      <div style={{ display: 'flex' }}>
        {/* Muestra el Sidebar excepto en Home y Login */}
        {!isHomePage && !isLoginPage && <Sidebar />}
        
        <div style={{ flex: 1 }}>
          {/* Solo muestra el Header si no estamos en Perfil o Dashboard */}
          {!isPerfilPage && !isDashboardPage && <Header />}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
          
          {!isPerfilPage && !isDashboardPage && <Footer />}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
