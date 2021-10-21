import { ISetEventModalAction, ISetSubmitEvent } from './EventAction';

import { Action } from 'redux';
import { eventData } from '../../../App/Enum';

const initialState: any = {
  modalAction: 'register',
  list: eventData,
};

export default function EventReducer(state = initialState, action: Action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_EVENT_MODAL_ACTION': {
      const setEventModalAction = action as ISetEventModalAction;
      newState.modalAction = setEventModalAction.modalAction;
      return { ...newState };
    }
    case 'SUBMIT_EVENT': {
      const setEventModalAction = action as ISetSubmitEvent;
      const listEvent: any = state.list;
      listEvent.push(setEventModalAction.data);
      newState.list = listEvent;
      return { ...newState };
    }
  }
  return state;
}
