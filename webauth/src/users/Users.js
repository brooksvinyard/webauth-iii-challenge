import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth.js';

class Users extends React.Component {
    state = {
        users: []
    }

    render() {
        return(
            <>
                <h2>All Users</h2>
                <ul>
                    {this.state.users.map(u => (
                        <div className="users" key = {u.username}>
                            <p><strong>Name:</strong> {u.username}</p>
                            <p><strong>Department: </strong>{u.department}</p>
                        </div>
                    ))}
                </ul>
            </>
        )
    }

    componentDidMount() {
        const endpoint = `/users`;
        axios
        .get(endpoint)
        .then(res => {
            this.setState({ users: res.data })
        })
        .catch(error => {
            console.error('USERS ERROR', error)
        });
    }
}

export default requiresAuth(Users);