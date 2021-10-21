import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as actionComponent from '../../App/Store/ComponentAction';

import { bindActionCreators, compose } from 'redux';

import ModalEventComponent from '../Component/ModalEventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ModalEventContainer(props) {
  const { componentAction } = props;
  const handleCancelModal = () => {
    componentAction.openModal('Event');
  };
  return (
    <ModalEventComponent handleCancelModal={handleCancelModal} {...props} />
  );
}
const mapStateToProps = createStructuredSelector({
  modalIsShow: SelectorComponent.eventModalIsShow(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ModalEventContainer);
