import React from "react";
import { Article, Sidebar } from "../../Components";

const ArticlePage: React.FC = () => {
  return (
    <div className="articlePage">
      <Article />
      <Sidebar />
    </div>
  );
};

export default ArticlePage;
