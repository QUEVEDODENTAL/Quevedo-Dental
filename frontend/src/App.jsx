import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Footer from './components/Footer';
<<<<<<< HEAD
import Servicios from './components/Servicios'; 
import Dashboard from './components/Dashboard';
import Historial from './components/Historial';
=======
=======
>>>>>>> main
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Register from './pages/Register';
import ClientList from './pages/ClientList';
import ClientDetails from './components/ClientDetails';
import Servicios from './pages/Servicios';
import Historial from './pages/Historial';
>>>>>>> main
import Odontograma from './components/Odontograma';

function App() {
  const location = useLocation();

  // Condiciones para mostrar Header y Footer solo en Home y Login
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <AuthProvider>
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
<<<<<<< HEAD
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
=======
>>>>>>> main
      </div>
    </AuthProvider>
  );
}

export default App;

