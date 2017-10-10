import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';

import './App.css';

class App extends Component {
  render() {
    return (


      <Router>

        {/* <Route exact path='/Products' component={Section} activeClassName="active"/> */}

        <Route exact path='/' component={Home} activeClassName="active"/>

   </Router>
    );
  }
}

export default App;
