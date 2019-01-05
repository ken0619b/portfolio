import React, { Component } from 'react';

import i18next from 'i18next';
import enLocalesTranslationJson from '../locales/en/translation'
import jaLocalesTranslationJson from '../locales/ja/translation'

i18next
  .init({
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

class About extends Component {  

  state = {
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>{i18next.t('greeting')}</h3>
        <p>{i18next.t('title')}</p>
      </div>
      )
  }
}

export default About;