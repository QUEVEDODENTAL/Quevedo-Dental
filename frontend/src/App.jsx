import { Routes, Route } from 'react-router-dom';
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
import ClienteDetails from './components/client/ClientDetails';

function App() {
<<<<<<< HEAD
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
          
=======
  return (
    <AuthProvider>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
>>>>>>> main
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
              <Route path="paciente/:id" element={<ClienteDetails />} />
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
              <Route path="paciente/:id" element={<ClienteDetails />} />
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