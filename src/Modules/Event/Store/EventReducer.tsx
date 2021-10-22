import {
  ISetDetailEventAction,
  ISetEventModalAction,
  ISetSubmitEvent,
  ISetUpdateEvent,
} from './EventAction';

import { Action } from 'redux';
import { eventData } from '../../../App/Enum';

const initialState: any = {
  modalAction: 'register',
  list: eventData,
  detailEvent: null,
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
    case 'RESET_FORM_EVENT': {
      newState.modalAction = 'register';
      newState.detailEvent = null;
      return { ...newState };
    }
    case 'SET_DETAIL_EVENT': {
      const setDetaileventAction = action as ISetDetailEventAction;
      newState.detailEvent = setDetaileventAction.detail;
      return { ...newState };
    }
    case 'UPDATE_EVENT': {
      const setUpdateEventAction = action as ISetUpdateEvent;
      const data: any = setUpdateEventAction.data;
      const listEvent: any = state.list;
      const index = listEvent.findIndex(e => {
        return e.id === data.id;
      });
      listEvent.splice(index, 1);
      listEvent.push(data);
      newState.list = listEvent;
      return { ...newState };
    }
  }
  return state;
}
