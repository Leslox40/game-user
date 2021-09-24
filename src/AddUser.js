import React, { Component } from 'react'
import PropTypes from 'prop-types'

// AddUser component responsible for adding a new user
class AddUser extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
        },
        userExist: false,
    };

    // Change user as data is being entered into the form
    handleChange = (event) => {
       const { name, value } = event.target;

       this.setState((currentState) => ({
           ...currentState,
            user: {
                ...currentState.user,
                [name]: value
            },
        }));
    };

    // Check if a user already exist from the array of users passed as props from App component
    ifUserExists = (currentUsername) => {
        const users = this.props.users
        for (let user of users) {
            if(user.username === currentUsername){
                return true;
            }
        }
        return false;
    };

    // Function sends the new through a callback passed as a prop from App component.
    // This happens after checking if the user exist by calling ifuserExist Method
    handleOnSubmit = (event) => {
        event.preventDefault();
        const userExists = this.ifUserExists(this.state.user.username);

        if(!userExists) {
            this.props.onAddUser(this.state.user);
        }

        this.setState(() => ({
            userExists,
        }));
    };

    // Function disables button if all input fields don't have data
    isDisabled = () => {
        const { firstName, lastName, username } = this.state.user;
        console.log(lastName, username)

        return firstName === '' || lastName === '' || username === '';
    };


    render() {
        const { firstName, lastName, username } = this.state.user;
        return (
            <div className='box'>
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text'
                        className='inner-item'
                        placeholder='First Name'
                        name='firstName'
                        value={firstName}
                        onChange={this.handleChange}

                    />
                    <input type='text'
                        className='inner-item'
                        placeholder='Last Name'
                        name='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                    />
                    <input type='text'
                        className='inner-item'
                        placeholder='Username'
                        name='username'
                        value={username}
                        onChange={this.handleChange}
                    />
                    <button className='inner-item' disabled={this.isDisabled()}>Add User</button>
                </form>
            </div>
        )
    }
}

export default AddUser