import * as AuthSelector from '../../Auth/Selector/AuthSelector';

import { call, select } from 'redux-saga/effects';

function* getToken() {
  return yield select(AuthSelector.makeTokenSelector());
}

export function* getCommonConfigHeader() {
  const token = yield call(getToken);
  return {
    headers: { Authorization: `bearer ${token}` }
  };
}
