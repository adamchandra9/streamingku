import { createSelector } from 'reselect';
const selectorComponent = state => state.ComponentState;
const selectorAppConfig = state => state.ConfigAppState;

export const makeBaseAPISelector = () =>
  createSelector(selectorAppConfig, state => state.appConfig.baseAPI);
export const makeSiderIsColapseSelector = () =>
  createSelector(selectorComponent, state => state.siderIsColapse);
export const makeIsLoading = () =>
  createSelector(selectorComponent, state => state.isLoading);

export const userModalIsShow = () =>
  createSelector(selectorComponent, state => state.showModalUser);
