import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = state => state.Language

/**
 * Select the language locale
 */

const makeSelectLocale = ()=> createSelector(selectLanguage,(state => state.locale))


export { selectLanguage, makeSelectLocale };
