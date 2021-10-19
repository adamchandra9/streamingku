import { createSelector } from 'reselect';

const selectorLoginForm = state => state.form;
const selectorAuth = state => state.AuthState;

export const makeUsernameSelector = () =>
  createSelector(selectorLoginForm, state => state.loginForm.values.username);
export const makePasswordSelector = () =>
  createSelector(selectorLoginForm, state => state.loginForm.values.password);

export const makeTokenSelector = () =>
  createSelector(selectorAuth, state => state.token);
export const makeAuthSelector = () =>
  createSelector(selectorAuth, state => state.auth);
export const makeAuthIdSelector = () => {
  const dataId = 'id';
  createSelector(selectorAuth, state => state.auth.user[dataId]);
};
export const makeAuthUserSelector = () =>
  createSelector(selectorAuth, state => state.auth.user.name);
