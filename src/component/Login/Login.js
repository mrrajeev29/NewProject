import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div id="container-login">
      <form id="form-login" action="/">
        <p id="title-login">Login</p>
        <input
          id="input-username"
          placeholder="Username"
          type="text"
          className="input"
        />
        <input
          id="input-password"
          placeholder="Password"
          type="password"
          className="input"
        />
        <Link to="/" ><button id="button-login" type="submit" className="btn">Login
        </button></Link>
          <Link to="/signup" >
          <button id="button-login" type="submit" className="btn">
          Signup
        </button>
          </Link>
        
      </form>
    </div>
  );
};

export default Login;
