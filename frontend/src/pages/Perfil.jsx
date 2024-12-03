import { useState } from 'react';
<<<<<<< HEAD
import Sidebar from '../components/Sidebar';
import '../styles/Perfil.css';

const Perfil = () => {
    const [dentista, setDentista] = useState({
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Odontología General',
        telefono: '+52 123 456 7890',
        correo: 'juan.perez@dentista.com',
        direccion: 'Calle Ficticia 123, Ciudad, Pais',
        fechadeNacimiento: '1980-01-01',
        experiencia: '15 primaveras en el campo de la odontología',
        universidad: 'Puro ITE mi compa',
    });

    const [esEditando, setEsEditando] = useState(false);

    const manejarCambio = ({ target: { name, value } }) =>
        setDentista({ ...dentista, [name]: value });

    return (
        <div className="perfil-container">
            <Sidebar />
            <div className="perfil-content">
                {/* Círculo con las iniciales */}
                <div className="perfil-photo-container">
                    <div className="circle">
                        <span className="initials">
                            {dentista.nombre.split(' ').map((word) => word[0]).join('')}
                        </span>
                    </div>
                </div>

                {/* Información del perfil */}
                <div className="perfil-info">
                    {esEditando ? (
                        Object.keys(dentista).map((key) => (
                            <div key={key}>
                                <input
                                    type="text"
                                    name={key}
                                    value={dentista[key]}
                                    onChange={manejarCambio}
                                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                    className="editable-input"
                                />
                            </div>
                        ))
                    ) : (
                        Object.entries(dentista).map(([key, value]) => (
                            <p key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </p>
                        ))
                    )}
                </div>

                {/* Botón de alternancia entre editar y guardar */}
                <button onClick={() => setEsEditando(!esEditando)} className="toggle-button">
                    {esEditando ? 'Guardar' : 'Editar'}
                </button>
            </div>
        </div>
    );
=======
import '../styles/Perfil.css';

const Perfil = () => {
  const [dentista, setDentista] = useState({
    nombre: 'Dr. Juan Pérez',
    especialidad: 'Odontología General',
    telefono: '+52 123 456 7890',
    correo: 'juan.perez@dentista.com',
    direccion: 'Calle Ficticia 123, Ciudad, Pais',
    fechadeNacimiento: '1980-01-01',
    experiencia: '15 primaveras en el campo de la odontología',
    universidad: 'Puro ITE mi compa',
  });

  const [esEditando, setEsEditando] = useState(false);

  const manejarCambio = ({ target: { name, value } }) =>
    setDentista({ ...dentista, [name]: value });

  return (
    <div className="perfil-container">
      <div className="perfil-content">
        {/* Círculo con las iniciales */}
        <div className="perfil-photo-container">
          <div className="circle">
            <span className="initials">
              {dentista.nombre.split(' ').map((word) => word[0]).join('')}
            </span>
          </div>
        </div>

        {/* Información del perfil */}
        <div className="perfil-info">
          {esEditando ? (
            Object.keys(dentista).map((key) => (
              <div key={key}>
                <input
                  type="text"
                  name={key}
                  value={dentista[key]}
                  onChange={manejarCambio}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="editable-input"
                />
              </div>
            ))
          ) : (
            Object.entries(dentista).map(([key, value]) => (
              <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
              </p>
            ))
          )}
        </div>

        {/* Botón de alternancia entre editar y guardar */}
        <button onClick={() => setEsEditando(!esEditando)} className="toggle-button">
          {esEditando ? 'Guardar' : 'Editar'}
        </button>
      </div>
    </div>
  );
>>>>>>> Frontend
};

export default Perfil;
