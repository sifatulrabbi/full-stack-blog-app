import React from 'react';
import { TopBar } from './Components';
import { ArticlePage, Home, Write } from './Pages';
import './Styles/CSS/main.css';

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      {/* <Home /> */}
      {/* <ArticlePage /> */}
      <Write />
    </>
  );
};

export default App;
