import { Field, reduxForm } from 'redux-form';

import CButton from '../../../Assets/Components/CButton';
import CModal from '../../../Assets/Components/CModal';
import { Form } from 'antd';
import { InputText } from '../../../Assets/Components/CInput';
import React from 'react';

function FormModalParticipantComponent(props) {
  const { modalIsShow, handleCancelModal, handleSubmit } = props;
  const headerComponent = () => {
    return <span>Add Participant</span>;
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
          name="name"
          component={InputText}
          idComponent="inputName"
          label="Name"
        />
        <Field
          name="email"
          component={InputText}
          idComponent="InputEmail"
          label="Email"
        />
        <Field
          name="phone"
          component={InputText}
          idComponent="inputPhone"
          label="Phone Number"
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
const ModalParticipantComponent = reduxForm({
  form: 'participant',
  shouldError: () => {
    return true;
  },
  enableReinitialize: true,
})(FormModalParticipantComponent);
export default ModalParticipantComponent;
