import moment from 'moment';

const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.language || 'en';
  }
};

const loadLocale = async () => {
  try {
    await import(`moment/locale/${getNavigatorLanguage().toLowerCase()}`);
    moment.locale(getNavigatorLanguage().toLowerCase());
  } catch (e) {
    console.info('Navigator language load failed');
    moment.locale('en');
  }
};

export { loadLocale };
