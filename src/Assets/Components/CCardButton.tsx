import { Button } from 'antd';
import React from 'react';

interface IProps {
  buttonData;
  buttonFloat;
  isLoading?;
}
export default function CCardButton(props: IProps) {
  const { buttonData, buttonFloat, isLoading } = props;
  const dataBtn = buttonData.map((value, index) => {
    const { content, type, icon, onClick } = value;
    return (
      <Button
        style={{
          marginLeft: buttonFloat === 'right' ? '10px' : 0,
          marginRight: buttonFloat === 'right' ? 0 : '10px'
        }}
        icon={icon}
        key={index}
        type={type}
        onClick={onClick}
        loading={isLoading}
      >
        {content}
      </Button>
    );
  });
  return (
    <React.Fragment>
      <span style={{ float: buttonFloat }}>{dataBtn}</span>
      <span className="clearfix" />
      <div style={{ marginBottom: '30px' }} />
    </React.Fragment>
  );
}
