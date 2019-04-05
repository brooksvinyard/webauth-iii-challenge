import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from "./header/Header";
import Login from './login/Login.js';
import Register from './login/Register.js';
import Users from './users/Users.js';

class App extends Component {
  render() {
    return (
      <>
      <Header />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/users" component={Users} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('token')
  }
}

function Home(props) {
  return <h1>Welcome Home!</h1>;
}
export default App;
