import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: 'frodo',
        password: 'pass'
    }

    render() {
        return (
            <>
            <h2>Please Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username"></label>
                        <input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            id="username"
                            type="text" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            id="password"
                            type="password" 
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </>
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = "http://localhost:5000/api/login"
        axios
            .post(endpoint, this.state)
            .then(res => {
                // console.log('LOGIN RESPONSE', res.data);
                localStorage.setItem('token', res.data.token)
                this.props.history.push("/");
            })
            .catch(error => {
                console.error('LOGIN ERROR', error);
            });
    }

    handleInputChange = event => {
        const {id, value } = event.target;
        this.setState({ [id]: value })
    };
}

export default Login;