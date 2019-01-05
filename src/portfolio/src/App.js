import React, { Component,Fragment } from 'react';
import './App.css';
import About from './components/About';
import Work from './components/Work';
import Comment from './components/Comment';
import { Route, Link, Switch } from 'react-router-dom'; // react-route

class App extends Component {

  render() {
    return (
      <Switch>
        <Fragment>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><Link to='/comment'>Comment</Link></li>
          </ul>
          <hr />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/comment' component={Comment} />
        </Fragment>
      </Switch>
    )
  }
}

export default App;
