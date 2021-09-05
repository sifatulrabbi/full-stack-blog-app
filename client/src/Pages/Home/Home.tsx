import React from 'react';
import axios from 'axios';
import { Header, Sidebar, Posts } from '../../Components';
import { PostType } from '../../types';
import { useLocation } from 'react-router';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
