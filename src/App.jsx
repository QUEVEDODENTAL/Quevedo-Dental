import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';  // Solo ocultamos en Dashboard

  return (
    <div>
      {!isDashboardPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default App;
