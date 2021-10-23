import { Action } from 'redux';

export interface ISetEventModalAction extends Action {
  modalAction: string;
}
export interface ISetSubmitEvent extends Action {
  data: object;
}
export interface ISetDetailEventAction extends Action {
  detail: object;
}
export interface ISetUpdateEvent extends Action {
  data: object;
}
export interface ISetListParticipantAction extends Action {
  data: any[];
}
export interface ISetSubmitParticipantAction extends Action {
  data: object;
}
export function setEventModalAction(modalAction): ISetEventModalAction {
  return {
    type: 'SET_EVENT_MODAL_ACTION',
    modalAction,
  };
}
export function submitEvent(data): ISetSubmitEvent {
  return {
    type: 'SUBMIT_EVENT',
    data,
  };
}
export function resetFormEvent() {
  return {
    type: 'RESET_FORM_EVENT',
  };
}
export function setDetailevent(detail): ISetDetailEventAction {
  return {
    type: 'SET_DETAIL_EVENT',
    detail,
  };
}
export function updateEvent(data): ISetUpdateEvent {
  return {
    type: 'UPDATE_EVENT',
    data,
  };
}
export function setListParticipant(data): ISetListParticipantAction {
  return {
    type: 'SET_LIST_PARTICIPANT',
    data,
  };
}

export function resetFormParticipant() {
  return {
    type: 'RESET_FORM_PARTICIPANT',
  };
}
export function submitParticipant(data): ISetSubmitParticipantAction {
  return {
    type: 'SUBMIT_PARTICIPANT',
    data,
  };
}
