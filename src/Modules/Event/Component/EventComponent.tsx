import Table, { generateColumnData } from '../../../Assets/Components/CTable';

import CButton from '../../../Assets/Components/CButton';
import ModalEventContainer from '../Container/ModalEventContainer';
import React from 'react';

export default function EventComponent(props) {
  const { list, column, addEventClick, isLoading } = props;
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
