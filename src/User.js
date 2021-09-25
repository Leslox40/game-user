import React from 'react'

const User = (props) => {
    const { user, showGamesPlayed } = props;

    return (
        <li className='user'>
            <p>username: {user.username}</p>
            <p>Number of games played: { showGamesPlayed ? user.numGamesPlayed : '*' }</p>
        </li>
    )
}

export default User