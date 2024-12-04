import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import {
  FaHome, FaUser, FaUserPlus, FaUserInjured,
  FaSignOutAlt, FaAddressBook, FaAddressCard, FaBars
} from "react-icons/fa";
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { auth, setAuth } = useAuth(); // Asegúrate de tener setAuth disponible para actualizar el estado
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include', // Asegura que se envíen cookies si las usas
      });

      if (!response.ok) {
        throw new Error('Error al cerrar sesión');
      }

      // Actualizar el estado de autenticación en el contexto
      setAuth({
        isAuthenticated: false,
        role: null,
      });

      // Redirigir a la página de login
      navigate('/login');
    } catch (error) {
      console.error('Error en el cierre de sesión:', error);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar-container">
      <aside className={`sidebar-desktop ${isCollapsed ? 'collapsed' : ''}`}>
        <ul className="menu">
          <div className='logo-line'>
            <Logo />
            <div className={`Logo ${isCollapsed ? 'hidden' : ''}`}>
              Quevedo Dental
            </div>
          </div>
          <li onClick={() => navigateTo('/dashboard')}>
            <FaHome className="icon" />
            <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Inicio</span>
          </li>

          {/* Menú dinámico basado en roles */}
          {auth.role === 'admin' && (
            <>
              <li onClick={() => navigateTo('/register')}>
                <FaUserPlus className="icon" />
                <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Registrar</span>
              </li>
              <li onClick={() => navigateTo('/historial')}>
                <FaAddressBook className="icon" />
                <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Historial</span>
              </li>
            </>
          )}

          {auth.role === 'doctor' && (
            <>
              <li onClick={() => navigateTo('/clientes')}>
                <FaAddressCard className="icon" />
                <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Pacientes</span>
              </li>
              <li onClick={() => navigateTo('/servicios')}>
                <FaUserInjured className="icon" />
                <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Servicios</span>
              </li>
            </>
          )}

          {auth.role === 'empleado' && (
            <>
              <li onClick={() => navigateTo('/perfil')}>
                <FaUser className="icon" />
                <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Perfil</span>
              </li>
            </>
          )}

          {/* Opción común a todos los roles */}
          <li onClick={handleLogout} className="logout">
            <FaSignOutAlt className="icon" />
            <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Salir</span>
          </li>

          <div className="icon-circle" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
