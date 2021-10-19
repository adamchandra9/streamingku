import * as ActionAuth from '../Store/AuthAction';
import * as ActionsComponent from '../../App/Store/ComponentAction';
import * as Selector from '../Selector/AuthSelector';
import * as SelectorConfig from '../../App/Selector/AppSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { FormattedMessage } from 'react-intl';
import React from 'react';
import axios from 'axios';
import { getCommonConfigHeader } from '../../App/Saga/AppSaga';
import history from '../../../App/History';
import { toast } from 'react-toastify';

export function* loginProcess() {
  let toastMessage;
  yield put(ActionsComponent.processLoading(true));
  try {
    const API_URL = yield select(SelectorConfig.makeBaseAPISelector());
    const usernameLogin = yield select(Selector.makeUsernameSelector());
    const passwordLogin = yield select(Selector.makePasswordSelector());
    const { data } = yield call(axios.post, `${API_URL}/auth/login`, {
      username: usernameLogin,
      password: passwordLogin
    });
    localStorage.setItem('authToken', JSON.stringify(data));
    yield put(ActionAuth.setLoginTokenData(data));
    history.push('/');
    toastMessage = (
      <span className="capitalFirst">
        <FormattedMessage id="loginSuccess" />
      </span>
    );
    toast.success(toastMessage, {
      className: 'toastSuccessBackground'
    });
  } catch (error) {
    if (error.response) {
      toastMessage = (
        <span className="capitalFirst">
          <FormattedMessage id={'unknownError'} />
        </span>
      );
    } else {
      toastMessage = (
        <span className="capitalFirst">
          <FormattedMessage id={'unknownError'} />
        </span>
      );
    }
    toast.error(toastMessage);
  }
  yield put(ActionsComponent.processLoading(false));
}

export function* renewTokenProcess(action) {
  try {
    const API_URL = yield select(SelectorConfig.makeBaseAPISelector());
    const config = yield call(getCommonConfigHeader);
    const { data } = yield call(
      axios.get,
      `${API_URL}/auth/token/refresh`,
      config
    );

    const newToken = {
      token: data.token
    };
    localStorage.setItem('authToken', JSON.stringify(data));
    yield put(ActionAuth.setLoginTokenData(newToken));
    if (action.lastAction !== null) {
      yield put(action.lastAction);
    } else {
      yield put(ActionsComponent.reset());
    }
  } catch (error) {
    let toastMessage;
    if (error.response) {
      toastMessage = (
        <span className="capitalFirst">
          <FormattedMessage id={'unknownError'} />
        </span>
      );
    }
    if (error.response.data) {
      toastMessage = (
        <span className="capitalFirst">
          <FormattedMessage id={'sessionExpired'} />
        </span>
      );
      yield put(ActionAuth.logout());
      history.push('/login');
    }
    toast.error(toastMessage);
    yield put(ActionsComponent.processLoading(false));
  }
}

export function* login() {
  yield takeLatest('SUBMIT_LOGIN_REQUESTED', loginProcess);
}
export function* renewToken() {
  yield takeLatest('RENEW_TOKEN', renewTokenProcess);
}
