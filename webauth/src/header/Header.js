import "./Header.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
//   state = {
//     token: null
//   };

//   componentDidMount = () => {
//     this.getToken();
//   };

//   getToken = () => {
//     const token = localStorage.getToken("token");
//     this.setState({ ...this.state, token: token });
//     return token;
//   };

  Logout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("authorization");
  };

  render() {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   return (
    //     <header className="header">
    //       <div className="left">
    //         <Link to={`/`}>
    //           <h2>JSON Web Tokens</h2>
    //         </Link>
    //       </div>
    //       <div className="right">
    //         <Link to={`/register`}>
    //           <p>Register</p>
    //         </Link>
    //         <Link to={`/login`}>
    //           <p>Login</p>
    //         </Link>
    //       </div>
    //     </header>
    //   );
    // } else if (token) {
      return (
          <header className="header">
              <div className="left">
                  <Link to={`/`}>
                      <h2>JSON Web Tokens</h2>
                  </Link>
              </div>
              <div className="right">
                  <Link to={`/register`}>
                      <p>Register</p>
                  </Link>
                  <Link to={`/login`}>
                      <p>Login</p>
                  </Link>
                  <Link to="/users">
                      <p>Users</p>
                  </Link>
                  <Link to={`/`}>
                      <p onClick={this.Logout}>Logout</p>
                  </Link>
              </div>
          </header>
      );
    // }
  }
}

export default Header;
