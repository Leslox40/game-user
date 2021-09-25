import React, { Component } from 'react'
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';

class User extends Component {
  render() {
    return (
      <li className='user'>
        <p>username</p>
        <p>Number of games played</p>
      </li>
    )
  }
}

class App extends Component {
  
  state = {
    users: [],
  };

  createNewUser = (newUser) => {
    this.setState(currentState => ({
      user: [...currentState.users, newUser]
    }));
  };

  render() {
    return (
      <div className="App">
        <AddUser onAddUser={this.createNewUser}/>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}
export default App;
