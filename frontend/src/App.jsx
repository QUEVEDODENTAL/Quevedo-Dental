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

function App() {
  const location = useLocation();

  // Condiciones para mostrar Header y Footer solo en Home y Login
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  // Páginas donde queremos eliminar el scroll
  const noScrollPages = ['/dashboard', '/perfil', '/register', '/clientes', '/servicios', '/historial'];

  // Comprobar si la página actual está en la lista de páginas sin scroll
  const isNoScrollPage = noScrollPages.includes(location.pathname);

  return (
    <AuthProvider>
      <div 
        style={{
          display: 'flex',
          overflow: isHomePage || isLoginPage ? 'auto' : 'hidden', // Aquí habilitamos o deshabilitamos el scroll
          height: '100vh' // Esto asegura que la altura ocupe toda la pantalla
        }}
      >
        {/* Muestra el Sidebar excepto en Home y Login */}
        {!isHomePage && !isLoginPage && <Sidebar />}
        
        <div 
          style={{ flex: 1 }} 
          className={isNoScrollPage ? 'no-scroll' : ''} // Aplica la clase 'no-scroll' en las páginas seleccionadas
        >
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
      </div>
    </AuthProvider>
  );
}

export default App;
