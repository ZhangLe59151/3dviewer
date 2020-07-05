import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';

const resources = {
  en: {
    translation: require('./language/enCommon.json'),
  },
  zh: {
    translation: require('./language/zhCommon.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  /* sessionStorage.getItem('LANGUAGE') === null
      ? 'zh'
      : JSON.parse(sessionStorage.getItem('LANGUAGE') || '').current, */
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', function(lng) {
  moment.locale(lng);
});

export default i18n;
