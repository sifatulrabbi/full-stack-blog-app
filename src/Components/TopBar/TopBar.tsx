import React from "react";
import { meImg } from "../../Images";

const TopBar: React.FC = () => {
  return (
    <div className="top">
      <div className="top-icon top-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">Home</li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Contact</li>
          <li className="top-list-item">Write</li>
          <li className="top-list-item">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img className="top-img" src={meImg} alt="Me" />
        <i className="top-icon search fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
