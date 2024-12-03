import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { FaHome, FaUser, FaUserPlus, FaUserInjured, FaSignOutAlt, FaAddressBook, FaAddressCard, FaBars } from "react-icons/fa";
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
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
            <div className={`Logo ${isCollapsed ? 'hidden' : ''}`}>Quevedo Dental</div> {/* Añadir la clase 'hidden' aquí */}
          </div>
<<<<<<< HEAD
          <li><FaHome className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Inicio</span></li>
          <li><FaAddressCard className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Pacientes</span></li>
          <li><FaUser className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Perfil</span></li>
          <li><FaUserPlus className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Registrar</span></li>
          <li><FaAddressBook className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Historial</span></li>
          <li onClick={() => navigate('/servicios')}><FaUserInjured className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Servicios</span></li>
          <li onClick={handleLogout} className="logout"><FaSignOutAlt className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Salir</span></li>
=======
          <li onClick={() => navigateTo('/dashboard')}>
            <FaHome className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Inicio</span>
          </li>
          <li onClick={() => navigateTo('/clientes')}>
            <FaAddressCard className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Pacientes</span>
          </li>
          <li onClick={() => navigateTo('/perfil')}>
            <FaUser className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Perfil</span>
          </li>
          <li onClick={() => navigateTo('/register')}>
            <FaUserPlus className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Registrar</span>
          </li>
          <li onClick={() => navigateTo('/historial')}>
            <FaAddressBook className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Historial</span>
          </li>
          <li onClick={() => navigateTo('/servicios')}>
            <FaUserInjured className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Servicios</span>
          </li>
          <li onClick={handleLogout} className="logout">
            <FaSignOutAlt className="icon" /> <span className={`text ${isCollapsed ? 'hidden' : ''}`}>Salir</span>
          </li>
>>>>>>> main
          <div className="icon-circle" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
