import React from 'react';
import { Link } from 'react-router-dom';
import { PostType } from '../../types';

interface Props {
  post: PostType;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="postCard">
      {post.photo && <img src={post.photo} alt="" className="postCardImg" />}
      <div className="postCardInfo">
        <div className="postCardCats">
          {post.categories.map((cat) => (
            <span key={cat + Date.now()} className="postCardCat">
              {cat}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postCardTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postCardDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postCardDesc">{post.desc}</p>
    </div>
  );
};

export default PostCard;
