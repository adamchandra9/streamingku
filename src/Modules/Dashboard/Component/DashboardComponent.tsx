import { Field, reduxForm } from 'redux-form';
import { InputSelect, InputText } from '../../../Assets/Components/CInput';

import CButton from '../../../Assets/Components/CButton';
import { Form } from 'antd';
import React from 'react';

function FormDashboardComponent(props) {
  const { listEvent, handleSubmit, detailEvent } = props;
  const participant = detailEvent ? detailEvent.participant : [];
  const dataButton = [
    {
      type: 'primary',
      className: 'btnLogout',
      content: `${detailEvent ? 'Stop' : 'Start'} Live Streaming`,
      id: 'btnStartLive',
      onClick: handleSubmit,
    },
  ];
  return (
    <React.Fragment>
      <div className="containerLabelTitle">
        <span className="labelTitle">Dashboad</span>
      </div>
      <Form layout="vertical">
        <Field
          name="link"
          component={InputText}
          idComponent="inputLinkStraming"
          label="Link Streaming"
        />
        <Field
          name="event"
          component={InputSelect}
          idComponent="selectEvent"
          label="Event"
          data={listEvent}
          disabled={detailEvent ? true : false}
        />
        <CButton buttonData={dataButton} />
      </Form>
      <div hidden={detailEvent ? false : true}>
        <span>
          <b className="capital">Total Participant</b>
        </span>
        <div className="totalParticipant">
          {detailEvent ? detailEvent.totalParticipant : null}
        </div>
      </div>
      <div hidden={detailEvent ? false : true} style={{ marginTop: '20px' }}>
        <span>
          <b className="capital">Participant Online</b>
          <div className="participantOnline">
            {participant.map((data, index) => {
              return (
                <span style={{ display: 'block' }} key={index}>
                  {data.name}
                </span>
              );
            })}
          </div>
        </span>
      </div>
    </React.Fragment>
  );
}
const DashboardComponent = reduxForm({
  form: 'dashboard',
  shouldError: () => {
    return true;
  },
  enableReinitialize: true,
})(FormDashboardComponent);
export default DashboardComponent;
