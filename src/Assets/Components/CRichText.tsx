import CKEditor from 'ckeditor4-react';
import { Form } from 'antd';
import React from 'react';

interface IProps {
  input;
  idComponent;
  placeholder;
  meta;
  label?;
  disabled;
  className;
}
export const InputRichText = ({
  input,
  meta: { touched, error },
  placeholder,
  idComponent,
  label,
  disabled,
  className,
}: IProps) => {
  const handleOnChange = e => input.onChange(e.editor.getData());
  const labelTitle = label ? (
    <span>
      <b className={`capital ${className}`}>{label}</b>
    </span>
  ) : null;
  return (
    <Form.Item
      validateStatus={error !== undefined ? 'error' : ''}
      help={error !== undefined ? error : ''}
      label={labelTitle}
      colon={false}
    >
      <CKEditor
        onChange={handleOnChange}
        data={input.value}
        readOnly={disabled}
        id={idComponent}
      />
    </Form.Item>
  );
};
