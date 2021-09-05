import React from 'react';
import { PostCard } from '..';
import { PostType } from '../../types';

interface Props {
  posts: PostType[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
