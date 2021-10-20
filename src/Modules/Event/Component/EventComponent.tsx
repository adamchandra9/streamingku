import Table, { generateColumnData } from '../../../Assets/Components/CTable';

import CButton from '../../../Assets/Components/CButton';
import React from 'react';

export default function EventComponent(props) {
  const { column } = props;
  const dataButton = [
    {
      type: 'primary',
      className: 'btnLogout',
      icon: 'PlusOutlined',
      content: 'Add Event',
      id: 'btnAddEvent',
    },
  ];
  return (
    <React.Fragment>
      <div className="containerLabelTitle">
        <span className="labelTitle">Event</span>
      </div>
      <CButton buttonData={dataButton} buttonFloat="right" />
      <Table columns={generateColumnData(column)} data={[]} pagination={true} />
    </React.Fragment>
  );
}
