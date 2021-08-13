import React from 'react';

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
          <button className="loginBtn reg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
