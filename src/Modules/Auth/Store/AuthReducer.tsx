import { Action } from 'redux';

export const initialState: any = {
  token: '',
  auth: {
    user: {
      name: ''
    }
  }
};

export interface IAuthAction extends Action<string> {}
export interface IDataLogin {
  token?: string;
}
export interface ISetLoginAction extends IAuthAction {
  dataLogin: IDataLogin;
}

export default function authReducer(state = initialState, action: IAuthAction) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_LOGIN_TOKEN': {
      const setLoginAction = action as ISetLoginAction;
      const jwtDecode = require('jwt-decode');
      const decodedAuth = jwtDecode(setLoginAction.dataLogin.token);
      newState.auth = decodedAuth;
      newState.token = setLoginAction.dataLogin.token;
      return { ...newState };
    }

    case 'LOGOUT':
      newState.token = undefined;
      return { ...newState };
  }
  return state;
}
