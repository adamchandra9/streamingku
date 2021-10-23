import { createSelector } from 'reselect';

const selectorEvent = state => state.EventState;

export const makeModalEventActionSelector = () =>
  createSelector(selectorEvent, state => state.modalAction);
export const makeListEventSelector = () =>
  createSelector(selectorEvent, state => state.list);
export const makeDetailEventSelector = () =>
  createSelector(selectorEvent, state => state.detailEvent);
export const makeListParticipantSelector = () =>
  createSelector(selectorEvent, state => state.listParticipant);
