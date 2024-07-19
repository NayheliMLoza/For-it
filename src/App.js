import React from 'react';
import UserList from './containers/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Gestion de Usuarios</h1>
      <UserList />
    </div>
  );
};

export default App;
