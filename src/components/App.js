import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing}/>
        <Route path="/post/:id" component={} />
      </Switch>
    </Router>
  );
}
