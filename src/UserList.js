import React, { Component } from 'react'
import User from './User';

class UserList extends Component {
    state = {
        showGamesPlayed: true,
    };

    toggleGamesPlayed = () => {
        this.setState(currentState => ({
            showGamesPlayed: !currentState.showGamesPlayed,
        }));
    };

    render() {
        const { showGamesPlayed } = this.state;
        const { users } = this.props;

        const showGamesPlayedButton = (
            <button className='inner-item' onClick={this.toggleGamesPlayed}>
                { showGamesPlayed ? 'Show' : 'Hide' } the number of games played
            </button>
        );

        return (
            <div className='box'>
                { users  && users.length > 0 ? showGamesPlayedButton : '' }
                <ol className='inner-item'>
                   { users.map(user => (
                        <User key={user.username} showGamesPlayed={showGamesPlayed} user={ user }/>
                    )) }
                </ol>
            </div>
        );
    }
}

export default UserList