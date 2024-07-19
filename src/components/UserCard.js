import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Ciudad: {user.address.city}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Empresa: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
