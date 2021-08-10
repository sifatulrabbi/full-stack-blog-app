import React from "react";
import { TopBar } from "./Components";
import { ArticlePage, Home } from "./Pages";
import "./Styles/CSS/main.css";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      {/* <Home /> */}
      <ArticlePage />
    </>
  );
};

export default App;
