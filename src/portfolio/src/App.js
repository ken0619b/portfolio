import React, { Component,Fragment } from 'react';
import './App.css';
import About from './components/About';
import Work from './components/Work';
import Comment from './components/Comment';
import { Route, Link, Switch } from 'react-router-dom'; // react-route

import i18next from 'i18next';
import enLocalesTranslationJson from './locales/en/translation'
import jaLocalesTranslationJson from './locales/ja/translation'

i18next.init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: enLocalesTranslationJson
    },
    ja: {
      translation: jaLocalesTranslationJson
    }
  }
});

class App extends Component {
  render() {
    return (
      <div>
      <div className="wrapper">
        <Switch>
          <Fragment>
            <nav className="nav">
              <div className="nav__item"><Link to='/about'>About</Link></div>
              <div className="nav__item"><Link to='/work'>Work</Link></div>
              <div className="nav__item"><Link to='/comment'>Comment</Link></div>
            </nav>
            <div className="intro-wrapper">
              <h2 className="intro-name">{i18next.t('greeting')}</h2>
              <p className="intro-tagline"><span className="highlight">{i18next.t('job_title')}</span></p>
            </div>
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/comment' component={Comment} />
          </Fragment>
        </Switch>
      </div>
      <footer className="footer">2019 Kenichi Ukai</footer>
      </div>
    )
  }
}

export default App;
