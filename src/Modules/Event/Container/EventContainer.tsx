import EventComponent from '../Component/EventComponent';
import React from 'react';

export default function EventContainer(props) {
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
  return <EventComponent column={column} {...props} />;
}
