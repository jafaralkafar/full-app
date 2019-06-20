import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom' 
import LandingPage from './components/LandingPage'
import PostsContainer from './components/PostsContainer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/posts' component={PostsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
