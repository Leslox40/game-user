import React, { Component } from 'react'
import './App.css';
import AddUser from './AddUser';

class UserList extends Component {
  render() {
    return (
      <div className='box'>
        <button className='inner-item'>Show the number of games played</button>
        <ol className='inner-item'>
          <User />
        </ol>
      </div>
    );
  }
}

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
        <UserList />
      </div>
    )
  }
}
export default App;
