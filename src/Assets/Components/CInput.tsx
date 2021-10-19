import { Form, Input, Select } from 'antd';

import CIcon from './CIcon';
import React from 'react';

interface IPropsText {
  input?;
  meta?;
  placeholder?;
  idComponent?;
  icon?;
  label?;
}

interface IPropsSelect {
  input?;
  meta?;
  placeholder?;
  idComponent?;
  icon?;
  label?;
  data;
  dafaultItemName;
}

export const InputText = ({
  input,
  meta: { touched, error },
  placeholder,
  idComponent,
  icon,
  label
}: IPropsText) => {
  const handleOnChange = e => input.onChange(e.target.value);
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
      <Input
        placeholder={placeholder}
        prefix={
          icon ? (
            <CIcon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
          ) : null
        }
        onChange={handleOnChange}
        onBlur={input.onBlur}
        id={idComponent}
        value={input.value}
      />
    </Form.Item>
  );
};

export const InputSelect = ({
  input,
  meta: { touched, error },
  data,
  dafaultItemName,
  idComponent,
  label
}: IPropsSelect) => {
  const items = data.map((item, key) => (
    <Select.Option
      id={`optionValue${label}-${key}`}
      key={item.id}
      value={item.id}
    >
      {item.name}
    </Select.Option>
  ));
  const handleOnChange = e => {
    input.onChange(e);
  };
  const labelTitle = (
    <span>
      <b className="capital">{label}</b>
    </span>
  );

  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      label={labelTitle}
      colon={false}
    >
      <Select
        onChange={handleOnChange}
        onBlur={input.onBlur}
        id={idComponent}
        value={input.value}
      >
        <Select.Option value="">{dafaultItemName}</Select.Option>
        {items}
      </Select>
    </Form.Item>
  );
};

export const InputPassword = ({
  input,
  meta: { touched, error },
  idComponent,
  icon,
  label,
  placeholder
}: IPropsText) => {
  const handleOnChange = e => input.onChange(e.target.value);
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
      <Input.Password
        prefix={
          icon ? (
            <CIcon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
          ) : null
        }
        onChange={handleOnChange}
        onBlur={input.onBlur}
        id={idComponent}
        value={input.value}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};
