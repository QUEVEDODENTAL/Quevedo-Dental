import { useState, useEffect } from 'react';
import './Perfil.css';

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/perfil/profile', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Error al obtener el perfil');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSaveChanges = async () => {
    const response = await fetch('http://localhost:3000/perfil/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),  // user es el estado actualizado del perfil
      credentials: 'include',  // Para asegurar que las cookies se envíen
    });

    if (!response.ok) {
      throw new Error('Error al guardar los cambios');
    }
    const result = await response.json();
    console.log(result);  // Esto te ayudará a ver la respuesta del servidor
  };


  if (!user) return <p>Cargando...</p>;

  return (
    <div className="perfil-container">
      <div className="perfil-content">
        <div className="perfil-photo-container">
          <div className="circle">
            <span className="initials">
              {user.Name.split(' ').map((word) => word[0]).join('')}
            </span>
          </div>
        </div>

        <div className="perfil-info">
          {isEditing ? (
            Object.keys(user).map((key) => (
              <div key={key}>
                <input
                  type="text"
                  name={key}
                  value={user[key]}
                  onChange={handleInputChange}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="editable-input"
                />
              </div>
            ))
          ) : (
            Object.entries(user).map(([key, value]) => (
              <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
              </p>
            ))
          )}
        </div>

        <button onClick={() => setIsEditing(!isEditing)} className="toggle-button">
          {isEditing ? 'Guardar' : 'Editar'}
        </button>

        {isEditing && (
          <button onClick={handleSaveChanges} className="save-button">
            Guardar
          </button>
        )}
      </div>
    </div>
  );
};

export default Perfil;
