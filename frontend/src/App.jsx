import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
<<<<<<< HEAD
=======
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
>>>>>>> Frontend
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
=======
import Perfil from './pages/Perfil';
>>>>>>> Frontend
import Register from './pages/Register';
import ClientList from './pages/ClientList';
import ClientDetails from './components/ClientDetails';
import Servicios from './pages/Servicios';
import Historial from './pages/Historial';
import Odontograma from './components/Odontograma';

function App() {
  const location = useLocation();

<<<<<<< HEAD
  // Verifica si la ruta actual es / o /login
=======
  // Condiciones para mostrar Header y Footer solo en Home y Login
>>>>>>> Frontend
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <AuthProvider>
<<<<<<< HEAD
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
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/clientes" element={<ClientList />} />
          <Route path="/clientes/:id" element={<ClientDetails />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="odontograma" element={<Odontograma />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>

        {/* Solo muestra el Footer en Home y Login */}
        {(isHomePage || isLoginPage) && <Footer />}
=======
      <div style={{ display: 'flex' }}>
        {/* Muestra el Sidebar excepto en Home y Login */}
        {!isHomePage && !isLoginPage && <Sidebar />}
        
        <div style={{ flex: 1 }}>
          {/* Solo muestra el Header y Footer si estamos en Home o Login */}
          {(isHomePage || isLoginPage) && <Header />}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/register" element={<Register />} />
            <Route path="/clientes" element={<ClientList />} />
            <Route path="/clientes/:id" element={<ClientDetails />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/odontograma" element={<Odontograma />} />
          </Routes>
          
          {/* Solo muestra el Footer si estamos en Home o Login */}
          {(isHomePage || isLoginPage) && <Footer />}
        </div>
>>>>>>> Frontend
      </div>
    </AuthProvider>
  );
}

export default App;
