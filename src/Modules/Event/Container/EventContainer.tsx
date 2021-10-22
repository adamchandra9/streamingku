import * as SelectorComponent from '../../App/Selector/AppSelector';
import * as SelectorEvent from '../Selector/EventSelector';
import * as actionComponent from '../../App/Store/ComponentAction';
import * as actionEvent from '../Store/EventAction';

import { bindActionCreators, compose } from 'redux';

import CButton from '../../../Assets/Components/CButton';
import EventComponent from '../Component/EventComponent';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

function EventContainer(props) {
  const { componentAction, eventAction, detailEvent } = props;
  const addEventClick = () => {
    componentAction.openModal('Event');
    eventAction.setEventModalAction('register');
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
    const editClick = () => {
      eventAction.setDetailevent(row.row.original);
      eventAction.setEventModalAction('update');
      componentAction.openModal('Event');
    };
    const settingClick = () => {
      eventAction.setDetailevent(row.row.original);
      eventAction.setEventModalAction('register');
    };
    const dataButton = [
      {
        type: 'link',
        className: 'btnTable',
        content: 'Edit',
        id: 'btnEditEvent',
        onClick: () => editClick(),
      },
      {
        type: 'link',
        className: 'btnTable',
        content: 'Setting',
        id: 'btnSettingEvent',
        onClick: () => settingClick(),
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
  const renderActionParticipant = () => {
    const dataButton = [
      {
        type: 'link',
        className: 'btnTable',
        content: 'View',
        id: 'btnViewParticipant',
      },
      {
        type: 'link',
        className: 'btnTable',
        content: 'Copy Link',
        id: 'btnCopyLinkParticipant',
      },
    ];
    return <CButton buttonData={dataButton} />;
  };
  const listParticipant: any = [];
  if (detailEvent) {
    for (const iterator of detailEvent.participant) {
      listParticipant.push(iterator);
    }
  }
  const columnParticipant = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Action',
      Cell: row => renderActionParticipant(),
    },
  ];
  console.log(listParticipant);

  return (
    <EventComponent
      column={column}
      columnParticipant={columnParticipant}
      listParticipant={listParticipant}
      addEventClick={addEventClick}
      {...props}
    />
  );
}
const mapStateToProps = createStructuredSelector({
  isLoading: SelectorComponent.makeIsLoading(),
  list: SelectorEvent.makeListEventSelector(),
  modalAction: SelectorEvent.makeModalEventActionSelector(),
  detailEvent: SelectorEvent.makeDetailEventSelector(),
});

const mapDispatchToProps = dispatch => ({
  componentAction: bindActionCreators(actionComponent, dispatch),
  eventAction: bindActionCreators(actionEvent, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(EventContainer);
