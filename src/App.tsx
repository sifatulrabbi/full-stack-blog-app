import React from 'react';
import { TopBar } from './Components';
import { ArticlePage, Home, Login, Settings, Write } from './Pages';
import './Styles/CSS/main.css';

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      {/* <Home /> */}
      {/* <ArticlePage /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      <Login />
    </>
  );
};

export default App;
