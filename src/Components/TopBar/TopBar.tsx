import React from 'react';
import { Link } from 'react-router-dom';
import { meImg } from '../../Images';

const TopBar: React.FC = () => {
  const user: boolean = true;

  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">Write</Link>
          </li>
          <li className="topListItem">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={meImg} alt="Me" />
        ) : (
          <>
            <Link className="topListItem" to="/login">
              Login
            </Link>
            <Link className="topListItem" to="/register">
              Register
            </Link>
          </>
        )}
        <i className="topIcon search fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
