import React from "react";
import { Header, Sidebar, Posts } from "../../Components";

const Home: React.FC = () => {
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
