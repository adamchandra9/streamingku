import { Field, reduxForm } from 'redux-form';
import { InputText, NumberInput } from '../../../Assets/Components/CInput';

import CButton from '../../../Assets/Components/CButton';
import CModal from '../../../Assets/Components/CModal';
import { Form } from 'antd';
import { InputDateTime } from '../../../Assets/Components/CInputDateTime';
import { InputRichText } from '../../../Assets/Components/CRichText';
import React from 'react';

function FormModalEventComponent(props) {
  const { modalIsShow, handleCancelModal, handleSubmit, modalAction } = props;
  const headerComponent = () => {
    return (
      <span>{`${modalAction === 'register' ? 'Create' : 'Update'}`} Event</span>
    );
  };
  const contentComponent = () => {
    const dataButton = [
      {
        type: 'primary',
        className: 'btnLogout',
        content: 'Submit',
        id: 'btnAddEvent',
        onClick: handleSubmit,
      },
    ];
    return (
      <Form layout="vertical">
        <Field
          name="eventName"
          component={InputText}
          idComponent="inputEventName"
          label="Event Name"
        />
        <Field
          name="dateStart"
          component={InputDateTime}
          idComponent="inputDateStart"
          label="Date Start"
        />
        <Field
          name="dateFinish"
          component={InputDateTime}
          idComponent="inputDateFinish"
          label="Date Finish"
        />
        <Field
          name="desc"
          component={InputRichText}
          idComponent="inputDescription"
          label="Description"
          disabled={false}
        />
        <Field
          name="totalParticipant"
          component={NumberInput}
          idComponent="inputTotalParticipant"
          label="Total Participant"
        />
        <div className="containerButtonSubmit">
          <CButton buttonData={dataButton} />
        </div>
      </Form>
    );
  };
  return (
    <CModal
      modalIsShow={modalIsShow}
      handleCancel={handleCancelModal}
      headerComponent={headerComponent()}
      contentComponent={contentComponent()}
      footerComponent={null}
    />
  );
}
const ModalEditCandidateComponent = reduxForm({
  form: 'event',
  shouldError: () => {
    return true;
  },
  enableReinitialize: true,
})(FormModalEventComponent);
export default ModalEditCandidateComponent;
