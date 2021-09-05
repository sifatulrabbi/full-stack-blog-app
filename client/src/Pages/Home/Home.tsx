import React from 'react';
import axios from 'axios';
import { Header, Sidebar, Posts } from '../../Components';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts/');
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
