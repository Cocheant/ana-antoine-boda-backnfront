import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';



import { IntlProvider } from 'react-intl';
import French from './lang/fr.json';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import current from './lang/current';

let lang;
let setupLang = localStorage.getItem("PreferredLang");

let locale = window.navigator.languages ? window.navigator.languages[0] : null;
locale = locale || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
let shortLang = locale;
if (setupLang && setupLang !== "") {
  shortLang = setupLang;

  if (shortLang === "es") {
    lang = Spanish;
  } else if (shortLang === "fr") {
    lang = French;
  } else {
    lang = English;
  }

}
else {


  if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[0];

  if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[0];

  console.log(lang, shortLang);

  if (shortLang === "es") {
    lang = Spanish;
  } else if (shortLang === "fr") {
    lang = French;
  } else {
    lang = English;
  }
}


current.language = shortLang;

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<IntlProvider locale={shortLang} messages={lang}>
   <React.StrictMode>
      <App />
  </React.StrictMode>
</IntlProvider>);
