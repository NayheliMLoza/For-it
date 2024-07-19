import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
    setFilteredUsers([...users, user]);
    setShowForm(false);  
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredUsers(users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.address.city.toLowerCase().includes(term)
    ));
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Buscar por Nombre, Email o Ciudad" />
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cerrar Formulario' : 'Cargar Usuario'}
      </button>
      {showForm && <UserForm addUser={addUser} />}
      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;



