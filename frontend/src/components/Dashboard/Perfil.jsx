import { useState, useEffect } from 'react';
import './Perfil.css';

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [originalUser, setOriginalUser] = useState(null);
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
        setOriginalUser(data);
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
    try {
      const response = await fetch('http://localhost:3000/perfil/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Error al guardar los cambios');
      }

      const result = await response.json();
      console.log('Cambios guardados:', result);
      setIsEditing(false);
      setOriginalUser(user);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  const handleCancelChanges = () => {
    setUser(originalUser);
    setIsEditing(false);
  };

  // Formatear las fechas a "día/mes/año"
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
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
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                {key === 'BirthDate' || key === 'HireDate'
                  ? formatDate(value)
                  : value}
              </p>
            ))
          )}
        </div>

        {isEditing ? (
          <div className="edit-buttons">
            <button onClick={handleSaveChanges} className="toggle-button">
              Guardar
            </button>
            <button onClick={handleCancelChanges} className="toggle-button">
              Cancelar
            </button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)} className="toggle-button">
            Editar
          </button>
        )}
      </div>
    </div>
  );
};

export default Perfil;
