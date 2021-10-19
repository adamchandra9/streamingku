import { Action } from 'redux';

export const initialState: any = {
  appConfig: {
    baseAPI: process.env.REACT_APP_API_URL
  }
};

export interface IAppConfigAction extends Action<string> {}
export interface ISetBaseAPI extends IAppConfigAction {
  baseAPI: string;
}

export default function AppConfigReducer(
  state = initialState,
  action: IAppConfigAction
) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'SET_BASE_API_URL': {
      const setBaseAPI = action as ISetBaseAPI;
      newState.appConfig.baseAPI = setBaseAPI.baseAPI;
      return { ...newState };
    }
    case 'RESET_BASE_API_URL':
      newState.appConfig.baseAPI = process.env.REACT_APP_API_URL;
      return { ...newState };
  }
  return state;
}
