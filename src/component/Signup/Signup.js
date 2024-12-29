import React from 'react';
import "./Signup.css"
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div id="container-login">
      <div id="form-login">
        <p id="title-login">Signup</p>
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
        <Link to="/" ><button id="button-login" type="submit" className="btn">Signup
        </button></Link>
          <Link to="/login" >
          <button id="button-login" type="submit" className="btn">
          Login
        </button>
          </Link>
      </div>
    </div>
  );
};

export default Signup;
