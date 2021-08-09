import React from "react";
import { img4 } from "../../Images";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle">React & Node</span>
        <span className="headerTitle large">Blog</span>
      </div>
      <img className="headerImg" src={img4} alt="Header" />
    </div>
  );
};

export default Header;
