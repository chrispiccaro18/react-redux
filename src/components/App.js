import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import PostById from '../containers/PostById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={PostById}/>
        <Route path="/" component={Landing}/>
      </Switch>
    </Router>
  );
}
