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

    handleChange = (event) => {
       const { name, value } = event.target;

       this.setState((currentState) => ({
           ...currentState,
            user: {
                [name]: value
            },
        }));
    };

    ifUserExists = (currentUsername) => {
        const users = this.props.users
        for (let user of users) {
            if(user.username === currentUsername){
                return true;
            }
        }
        return false;
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const userExists = this.ifUserExists(this.state.user.username);

        if(!userExists) {
            this.props.onAddUser(this.state.user);
        }

        this.setState(() => ({
            userExists,
        }));
    }


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
                    <button className='inner-item'>Add User</button>
                </form>
            </div>
        )
    }
}

export default AddUser