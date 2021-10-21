import { Action } from 'redux';

export interface ISetEventModalAction extends Action {
  modalAction: string;
}
export interface ISetSubmitEvent extends Action {
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
