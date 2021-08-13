import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">Register</span>
        <form className="loginForm">
          <label>Username</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="loginBtn">Register</button>
          <span style={{ textAlign: 'center' }}>or</span>
          <Link to="/login">
            <button className="loginBtn reg">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
