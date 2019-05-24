import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import PostById from '../containers/PostById';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/post/:id" component={PostById}/>
        <Route path="/" component={Landing}/>
      </Switch>
    </Router>
  );
}
