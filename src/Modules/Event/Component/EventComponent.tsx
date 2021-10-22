import Table, { generateColumnData } from '../../../Assets/Components/CTable';

import CButton from '../../../Assets/Components/CButton';
import ModalEventContainer from '../Container/ModalEventContainer';
import React from 'react';
import moment from 'moment';

export default function EventComponent(props) {
  const {
    list,
    column,
    addEventClick,
    isLoading,
    modalAction,
    detailEvent,
    listParticipant,
    columnParticipant,
  } = props;
  const dataButton = [
    {
      type: 'primary',
      className: 'btnLogout',
      icon: 'PlusOutlined',
      content: 'Add Event',
      id: 'btnAddEvent',
      onClick: addEventClick,
    },
  ];
  const dataButtonSetting = [
    {
      type: 'primary',
      className: 'btnDownload',
      icon: 'DownloadOutlined',
      content: 'Import XLS',
      id: 'btnDownload',
    },
    {
      type: 'primary',
      className: 'btnLogout',
      icon: 'PlusOutlined',
      content: 'Add Participan',
      id: 'btnAddParticipant',
    },
  ];
  if (modalAction === 'register' && detailEvent) {
    console.log(listParticipant);

    return (
      <React.Fragment>
        <h1>{detailEvent.eventName}</h1>
        <span>
          {moment(detailEvent.dateStart).format('dddd DD MMM YYYY hh:mm')}
        </span>
        <div
          className="containerHtmlView"
          dangerouslySetInnerHTML={{ __html: detailEvent.desc }}
        />
        <CButton buttonData={dataButtonSetting} />
        <Table
          isLoading={isLoading}
          columns={generateColumnData(columnParticipant)}
          data={listParticipant}
          pagination={true}
        />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="containerLabelTitle">
        <span className="labelTitle">Event</span>
      </div>
      <CButton buttonData={dataButton} buttonFloat="right" />
      <Table
        isLoading={isLoading}
        columns={generateColumnData(column)}
        data={list}
        pagination={true}
      />
      <ModalEventContainer />
    </React.Fragment>
  );
}
