import React from "react";
import "./Login.css";
import logo from "../../assets/icons/logo.svg"

const Login = () => {
  return (
    
    <div className="login-container">
        <div className="navbar-logo">
                <img src={logo} alt="Health Inspector" />
                <span>Health Inspector</span>
              </div>
      <div className="login-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
