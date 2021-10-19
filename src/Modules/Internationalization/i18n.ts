/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import enTranslationMessages from './translations/en';
import idLocaleData from 'react-intl/locale-data/id';
import idTranslationMessages from './translations/id';

addLocaleData(enLocaleData);
addLocaleData(idLocaleData);

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'id'
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  id: formatTranslationMessages('id', idTranslationMessages)
};

export {
  appLocales,
  formatTranslationMessages,
  translationMessages,
  DEFAULT_LOCALE
};
