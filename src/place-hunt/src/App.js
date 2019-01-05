import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Dashboard from './components/Dashboard';
import { Route, Link, Switch } from 'react-router-dom'; // react-route


class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
          <hr />
          <Route path='/about' component={About} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </Switch>
    )
  }
}

export default App;
