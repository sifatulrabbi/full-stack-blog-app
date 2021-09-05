import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { img2 } from '../../Images';
import { PostType } from '../../types';

const Article: React.FC = () => {
  const [post, setPost] = React.useState<PostType>();
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const getPost = async () => {
    const res = await axios.get(`http://localhost:5000/api/posts/${path}`);
    setPost(res.data);
  };

  React.useEffect(() => {
    getPost();
    document.documentElement.scrollTop = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return post ? (
    <div className="article">
      <div className="articleWrapper">
        {post.photo && <img className="articleImg" src={img2} alt="" />}
        <h1 className="articleTitle">
          {post.title}
          <div className="articleEdit">
            <i className="articleIcon far fa-edit"></i>
            <i className="articleIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="articleInfo">
          <span className="articleAuthor">
            Author:{' '}
            <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="articleDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="articleDesc">{post.desc}</p>
      </div>
    </div>
  ) : (
    <div className="article">
      <div className="articleWrapper">
        <div>No post found!</div>
      </div>
    </div>
  );
};

export default Article;
