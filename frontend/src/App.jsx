import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
<<<<<<< HEAD
import Sidebar from './components/Sidebar';
=======
>>>>>>> main
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
<<<<<<< HEAD
import Servicios from './components/Servicios'; 
import Dashboard from './components/Dashboard';
import Historial from './components/Historial';
=======
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
import Perfil from './pages/Perfil';
=======
import Register from './pages/Register';
import ClientList from './pages/ClientList';
import ClientDetails from './components/ClientDetails';
import Perfil from './pages/Perfil';
import Servicios from './pages/Servicios';
import Historial from './pages/Historial';
>>>>>>> main
import Odontograma from './components/Odontograma';
>>>>>>> main

function App() {

  const location = useLocation();

<<<<<<< HEAD
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
=======
  // Verifica si la ruta actual es / o /login
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <AuthProvider>
      <div>
        {/* Solo muestra el Header en Home y Login */}
        {(isHomePage || isLoginPage) && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
<<<<<<< HEAD
          }></Route>

          <Route path="/servicios" element={<Servicios />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="odontograma" element={<Odontograma/>} />
=======
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/clientes" element={<ClientList />} />
          <Route path="/clientes/:id" element={<ClientDetails />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="odontograma" element={<Odontograma />} />
          <Route path="/perfil" element={<Perfil />} />
>>>>>>> main
        </Routes>

        {/* Solo muestra el Footer en Home y Login */}
        {(isHomePage || isLoginPage) && <Footer />}
>>>>>>> main
      </div>
    </AuthProvider>
  );
}

export default App;

