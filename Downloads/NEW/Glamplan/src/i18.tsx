import * as RNLocalize from "react-native-localize";
import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import de from './translations/de.json';
import bg from './translations/bg.json';
import ru from './translations/ru.json';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        de: { translation: de },
        bg: { translation: bg },
        ru: { translation: ru },
      },
      lng: locales[0].languageCode,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);

  console.log('Language changed!')
};

export default i18n;
