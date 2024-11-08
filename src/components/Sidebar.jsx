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

  return (
    <div className="sidebar-container">
      <aside className={`sidebar-desktop ${isCollapsed ? 'collapsed' : ''}`}>
        <Logo />
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <ul className="menu">
          <li><FaHome /> <span className={isCollapsed ? 'hidden' : ''}>Inicio</span></li>
          <li><FaAddressCard /> <span className={isCollapsed ? 'hidden' : ''}>Pacientes</span></li>
          <li><FaUser /> <span className={isCollapsed ? 'hidden' : ''}>Perfil</span></li>
          <li><FaUserPlus /> <span className={isCollapsed ? 'hidden' : ''}>Registrar</span></li>
          <li><FaAddressBook /> <span className={isCollapsed ? 'hidden' : ''}>Historial creo</span></li>
          <li><FaUserInjured /> <span className={isCollapsed ? 'hidden' : ''}>Servicios</span></li>
          <li onClick={handleLogout} className="logout"><FaSignOutAlt /> <span className={isCollapsed ? 'hidden' : ''}>Salir</span></li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
