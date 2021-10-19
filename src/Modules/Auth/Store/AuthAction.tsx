import { IAuthAction } from './AuthReducer';

export function setLoginTokenData(dataLogin: object): IAuthAction {
  return {
    type: 'SET_LOGIN_TOKEN',
    dataLogin
  };
}
export function submitLogin() {
  return {
    type: 'SUBMIT_LOGIN_REQUESTED'
  };
}
export function logout() {
  return {
    type: 'LOGOUT'
  };
}
export function submitChangePassword() {
  return {
    type: 'CHANGE_PASSWORD_REQUESTED'
  };
}
export function renewToken(lastAction: any = null, url = null) {
  return {
    type: 'RENEW_TOKEN',
    lastAction,
    url
  };
}
