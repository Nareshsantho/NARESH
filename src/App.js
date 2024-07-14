import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ChatDetail from './pages/ChatDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat/:chatId" component={ChatDetail} />
      </Switch>
    </Router>
  );
};

export default App;
