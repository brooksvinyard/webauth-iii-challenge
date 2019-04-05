import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        department: '',
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Name: </label>
                        <input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            id="username"
                            type="text" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            id="password"
                            type="password" 
                        />
                    </div>
                    <div>
                        <label htmlFor="department">Department: </label>
                        <input
                            value={this.state.department}
                            onChange={this.handleInputChange}
                            id="department"
                            type="text" 
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </>
        );
    }
    login = event => {
        // event.preventDefault();

        const endpoint = "http://localhost:5000/api/login"
        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log('LOGIN RESPONSE', res.data);
                localStorage.setItem('token', res.data.token);
                this.props.history.push("/users");
            })
            .catch(error => {
                console.error('LOGIN ERROR', error);
            });
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log('STATE', this.state);

        const endpoint = "http://localhost:5000/api/register"
        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log('REGISTER RESPONSE', res.data);
                localStorage.setItem('token', res.data.token)
            })
            .then(() => this.login(this.state))
            
            .catch(error => {
                console.error('REGISTER ERROR', error);
            });
    }

    handleInputChange = event => {
        const {id, value } = event.target;
        this.setState({ [id]: value })
    };
}

export default Register;