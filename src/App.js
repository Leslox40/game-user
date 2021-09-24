import React, { Component } from 'react'
import './App.css';

class AddUserForm extends Component {
  render() {
    return (
      <div className='box'>
        <form>
          <input type='text'
                  className='inner-item'
                  placeholder='First Name'
          
          />
          <input type='text'
                  className='inner-item'
                  placeholder='Last Name'
          />
          <input type='text'
                  className='inner-item'
                  placeholder='Username'
          />
          <button className='inner-item'>Add User</button>
        </form>
      </div>
    );
  }
}

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
  render() {
    return (
      <div className="App">
        <AddUserForm />
        <UserList />
      </div>
    )
  }
}
export default App;
