import React, { Component } from 'react';

import i18next from 'i18next';
import enLocalesTranslationJson from '../locales/en/translation'
import jaLocalesTranslationJson from '../locales/ja/translation'

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

class About extends Component {  

  state = {
  }

  render() {
    return (
      <div className="intro-wrapper">
        <h2 className="section_header">{i18next.t('summary.title')}</h2>
        <p>{i18next.t('summary.texts.0')}</p>
        <p>{i18next.t('summary.texts.1')}</p>
        <p>{i18next.t('summary.texts.2')}</p>
      </div>
      )
  }
}

export default About;