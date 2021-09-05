import React from 'react';
import axios from 'axios';
import { meImg } from '../../Images';
import { CatType } from '../../types';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [cats, setCats] = React.useState<CatType[]>([]);

  const getCats = async () => {
    const res = await axios.get('http://localhost:5000/api/category');
    setCats(res.data);
  };

  React.useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={meImg} alt="Me" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet possimus
          reiciendis autem dolore minima neque recusandae, optio voluptatem, eius ipsum
          fuga beatae quidem cupiditate assumenda vero? Officiis quasi minima obcaecati.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link key={cat._id} to={`/?category=${cat.name}`}>
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
