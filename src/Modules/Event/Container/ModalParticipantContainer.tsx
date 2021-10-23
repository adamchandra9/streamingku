import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as actionComponent from '../../App/Store/ComponentAction';
import * as actionEvent from '../Store/EventAction';

import { bindActionCreators, compose } from 'redux';

import ModalParticipantComponent from '../Component/ModalParticipantComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalParticipantContainer(props) {
  const { componentAction, eventAction } = props;
  const handleCancelModal = () => {
    componentAction.openModal('Participant');
    eventAction.resetFormParticipant();
  };
  return (
    <ModalParticipantComponent
      handleCancelModal={handleCancelModal}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  modalIsShow: SelectorComponent.participantModalIsShow(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
  eventAction: bindActionCreators(actionEvent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ModalParticipantContainer);
