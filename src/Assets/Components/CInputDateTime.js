import { Form } from 'antd';
import React from 'react';

export const InputDateTime = ({
  input,
  meta: { touched, error },
  idComponent,
  label,
}) => {
  const handleOnChange = e => {
    const dateValue = document.getElementById(idComponent).value;
    input.onChange(dateValue);
  };
  const labelTitle = label ? (
    <span>
      <b className="capital">{label}</b>
    </span>
  ) : null;
  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      label={labelTitle}
      colon={false}
    >
      <input
        type="datetime-local"
        onChange={handleOnChange}
        id={idComponent}
        value={input.value}
        className="ant-input"
      />
    </Form.Item>
  );
};
