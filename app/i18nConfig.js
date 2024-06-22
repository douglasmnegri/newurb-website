import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locale/en.json';
import ptTranslation from '../locale/pt.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // Default language
  fallbackLng: 'pt', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
