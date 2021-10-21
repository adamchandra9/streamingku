import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as SelectorEvent from '../Selector/EventSelector';
import * as actionComponent from '../../App/Store/ComponentAction';

import { bindActionCreators, compose } from 'redux';

import CButton from '../../../Assets/Components/CButton';
import EventComponent from '../Component/EventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

function EventContainer(props) {
  const { componentAction } = props;
  const addEventClick = () => {
    componentAction.openModal('Event');
  };
  const renderDate = row => {
    const detail = row.row.original;
    return <span>{moment(detail.dateStart).format('YYYY-MM-DD hh:mm')}</span>;
  };
  const renderStatus = row => {
    const detail = row.row.original;
    const diff = moment(detail.dateStart, 'YYYYMMDD hh:mm')
      .fromNow()
      .split(' ');
    if (diff[2] === 'ago') {
      return <span>expired</span>;
    }
    return <div>active</div>;
  };
  const renderAction = row => {
    const dataButton = [
      {
        type: 'link',
        className: 'btnTable',
        content: 'Edit',
        id: 'btnEditEvent',
      },
      {
        type: 'link',
        className: 'btnTable',
        content: 'Setting',
        id: 'btnSettingEvent',
      },
    ];
    return <CButton buttonData={dataButton} />;
  };
  const column = [
    {
      Header: 'Event Name',
      accessor: 'eventName',
    },
    {
      Header: 'Date',
      Cell: row => renderDate(row),
    },
    {
      Header: 'Participant',
      accessor: 'totalParticipant',
    },
    {
      Header: 'Status',
      Cell: row => renderStatus(row),
    },
    {
      Header: 'Action',
      Cell: row => renderAction(row),
    },
  ];
  return (
    <EventComponent column={column} addEventClick={addEventClick} {...props} />
  );
}
const mapStateToProps = createStructuredSelector({
  isLoading: SelectorComponent.makeIsLoading(),
  list: SelectorEvent.makeListEventSelector(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EventContainer);
