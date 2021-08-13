import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopBar } from './Components';
import { ArticlePage, Home, Login, Register, Settings, Write } from './Pages';
import './Styles/CSS/main.css';

const App: React.FC = () => {
  const user: boolean = true;

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/post/:postId">
          <ArticlePage />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/settings">
          {user ? <Home /> : <Settings />}
        </Route>
        <Route exact path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/register">
          {user ? <Home /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
