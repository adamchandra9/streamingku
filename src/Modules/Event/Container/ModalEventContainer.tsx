import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as actionComponent from '../../App/Store/ComponentAction';
import * as actionEvent from '../Store/EventAction';

import { bindActionCreators, compose } from 'redux';

import ModalEventComponent from '../Component/ModalEventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { toast } from 'react-toastify';

function ModalEventContainer(props) {
  const { componentAction, formValue, eventAction } = props;
  const handleCancelModal = () => {
    componentAction.openModal('Event');
  };
  const handleSubmit = () => {
    if (formValue) {
      const data: any = formValue;
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
  };
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
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
  eventAction: bindActionCreators(actionEvent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ModalEventContainer);
