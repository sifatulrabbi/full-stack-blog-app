import React from "react";
import { TopBar } from "./Components";
import { Home } from "./Pages";
import "./Styles/CSS/main.css";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <Home />
    </>
  );
};

export default App;
