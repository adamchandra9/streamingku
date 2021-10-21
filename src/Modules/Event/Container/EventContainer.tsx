import * as actionComponent from '../../App/Store/ComponentAction';

import { bindActionCreators, compose } from 'redux';

import EventComponent from '../Component/EventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function EventContainer(props) {
  const { componentAction } = props;
  const addEventClick = () => {
    componentAction.openModal('Event');
  };
  const column = [
    {
      Header: 'Event Name',
      accessor: 'filenameregionFailedDetails',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Participant',
      accessor: 'uploaddate',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];
  return (
    <EventComponent column={column} addEventClick={addEventClick} {...props} />
  );
}
const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EventContainer);
