import { Routes, Route } from 'react-router-dom';
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


function App() {
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
          <Route path="odontograma" element={<Odontograma/>} />

        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
