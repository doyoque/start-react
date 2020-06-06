import React, { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    { id: 1, name: 'Doyoque', username: 'floppyDisk' },
    { id: 2, name: 'Tania', username: 'hardDisk' },
    { id: 3, name: 'Gerard', username: 'flashDisk' }
  ];

  // const initialForm = { id: null, name: '', username: '' }

  //set state
  const [users] = useState(usersData)

  var dom = 
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  return (
    dom
  );
}

export default App;
