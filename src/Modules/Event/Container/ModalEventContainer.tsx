import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as SelectorEvent from '../Selector/EventSelector';
import * as actionComponent from '../../App/Store/ComponentAction';
import * as actionEvent from '../Store/EventAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect, useDispatch } from 'react-redux';

import ModalEventComponent from '../Component/ModalEventComponent';
import { createStructuredSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { initialize } from 'redux-form';
import { toast } from 'react-toastify';

function ModalEventContainer(props) {
  const {
    componentAction,
    formValue,
    eventAction,
    list,
    modalAction,
    detailEvent,
  } = props;
  const dispatch = useDispatch();
  const handleCancelModal = () => {
    componentAction.openModal('Event');
    eventAction.resetFormEvent();
  };
  const handleSubmit = () => {
    if (modalAction === 'register') {
      if (formValue) {
        const data: any = formValue;
        data.id = list.length + 1;
        data.participant = [];
        eventAction.submitEvent(data);
      }
      componentAction.openModal('Event');
      componentAction.processLoading(true);
      eventAction.resetFormEvent();
      setTimeout(() => {
        toast.success('Data Berhasil ditambahkan');
        componentAction.processLoading(false);
      }, 3000);
    } else {
      eventAction.updateEvent(formValue);
      componentAction.openModal('Event');
      componentAction.processLoading(true);
      eventAction.resetFormEvent();
      setTimeout(() => {
        toast.success('Data Berhasil diubah');
        componentAction.processLoading(false);
      }, 3000);
    }
  };
  useEffect(
    () => {
      if (modalAction === 'update') {
        dispatch(initialize('event', detailEvent));
      }
    }, // eslint-disable-next-line
    [modalAction]
  );

  return (
    <ModalEventComponent
      handleCancelModal={handleCancelModal}
      handleSubmit={handleSubmit}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  modalIsShow: SelectorComponent.eventModalIsShow(),
  formValue: getFormValues('event'),
  list: SelectorEvent.makeListEventSelector(),
  modalAction: SelectorEvent.makeModalEventActionSelector(),
  detailEvent: SelectorEvent.makeDetailEventSelector(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
  eventAction: bindActionCreators(actionEvent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ModalEventContainer);
