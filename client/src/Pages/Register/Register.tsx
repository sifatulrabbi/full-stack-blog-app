import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../../types';

const Register: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:5000/api/auth/register', {
      username,
      email,
      password,
    });

    const user: UserType = res.data;
    console.log(user);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">Register</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.currentTarget.value)}
            value={username}
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            required
          />
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
