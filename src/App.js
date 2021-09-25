import React, { Component } from 'react'
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';


class App extends Component {
  
  state = {
    users: [],
  };

  // Update users Array state when a new user is sent through a callback passed in from AddUser component
  createNewUser = (newUser) => {
    newUser.numGamesPlayed = 0;
    this.setState(currentState => ({
      users: [...currentState.users, newUser]
    }));
  };

  render() {
    return (
      <div className="App">
        <AddUser onAddUser={this.createNewUser} users={this.state.users}/>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}
export default App;
