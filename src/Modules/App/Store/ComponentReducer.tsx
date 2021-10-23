import { Action } from 'redux';

export const initialState: any = {
  siderIsColapse: false,
  isLoading: false,
  showModalUser: false,
  showModalEvent: false,
  showModalParticipant: false,
};

export interface IComponentAction extends Action<string> {}
export interface ILoadingAction extends IComponentAction {
  isLoading?: boolean;
}
export interface IOpenModalAction extends IComponentAction {
  component: string;
}

export default function ComponentReducer(
  state = initialState,
  action: IComponentAction
) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'OPEN_SIDER':
      newState.siderIsColapse = !state.siderIsColapse;
      return { ...newState };

    case 'PROCESS_LOADING': {
      const loadingAction = action as ILoadingAction;
      newState.isLoading = loadingAction.isLoading;
      return { ...newState };
    }

    case 'SHOW_MODAL': {
      const openModalAction = action as IOpenModalAction;
      const component = openModalAction.component;
      newState[`showModal${component}`] = !state[`showModal${component}`];
      return { ...newState };
    }
  }
  return state;
}
