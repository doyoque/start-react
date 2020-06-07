import React, { useState, Fragment } from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Doyoque', username: 'floppyDisk' },
    { id: 2, name: 'Tania', username: 'hardDisk' },
    { id: 3, name: 'Gerard', username: 'flashDisk' }
  ]

  const initialForm = { id: null, name: '', username: '' }

  //set state
  const [users, setUser] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialForm)

  //CRUD operation
  const addUser = user => {
    user.id = users.length + 1
    setUser([ ...users, user ])
  }

  const deleteUser = id => {
    setEditing(false)
    setUser(users.filter( user => user.id !== id ))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false) 
    setUser(users.map(user => (user.id === id ? updatedUser : user)))
  }

  var dom = 
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (<Fragment>
                      <h2>Edit User</h2>
                      <EditUserForm editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                      />
                    </Fragment>) : (
                    <Fragment>
                      <h2>Add user</h2>
                      <AddUserForm addUser={addUser} />
                    </Fragment>
                    )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
    
  return (
    dom
  );
}

export default App;
