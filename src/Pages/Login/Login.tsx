import React from 'react';
import { img1 as img } from '../../Images';

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="loginBtn">Login</button>
          <button className="loginBtn reg">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
