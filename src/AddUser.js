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


    render() {
        const { firstName, lastName, username } = this.state.user;
        return (
            <div className='box'>
                <form>
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