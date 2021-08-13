import React from 'react';
import { img3 as img } from '../../Images';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle">React & Node</span>
        <span className="headerTitle large">Blog</span>
      </div>
      <img className="headerImg" src={img} alt="Header" />
    </div>
  );
};

export default Header;
