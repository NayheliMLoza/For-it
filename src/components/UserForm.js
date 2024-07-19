import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: { city: '' },
    phone: '',
    company: { name: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.');
    if (child) {
      setUser((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({
      name: '',
      username: '',
      email: '',
      address: { city: '' },
      phone: '',
      company: { name: '' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="address.city"
        value={user.address.city}
        onChange={handleChange}
        placeholder="Ciudad"
        required
      />
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
        placeholder="Telefono"
        required
      />
      <input
        type="text"
        name="company.name"
        value={user.company.name}
        onChange={handleChange}
        placeholder="Empresa"
        required
      />
      <button type="submit">Cargar usuario</button>
    </form>
  );
};

export default UserForm;
