import { Button } from 'antd';
import CIcon from './CIcon';
import React from 'react';

interface IProps {
  buttonData?;
  buttonFloat?;
  isLoading?;
  containerStyle?;
  handleRefresh?;
}

const renderRefresh = (handleRefresh, style) => {
  if (handleRefresh) {
    return (
      <Button
        icon={<CIcon type="ReloadOutlined" />}
        onClick={handleRefresh}
        style={style}
      >
        Refresh
      </Button>
    );
  }
  return null;
};

export default function CButton(props: IProps) {
  const { buttonData, buttonFloat, isLoading, containerStyle, handleRefresh } =
    props;
  let dataBtn;
  const style = {
    marginLeft: buttonFloat === 'right' ? '10px' : 0,
    marginRight: buttonFloat === 'right' ? 0 : '10px',
  };
  if (buttonData && Object.keys(buttonData).length) {
    dataBtn = buttonData.map((value, index) => {
      if (value) {
        const { content, icon, className } = value;
        const propsBtn = {
          ...value,
          icon: <CIcon type={icon} />,
          key: index,
          loading: isLoading,
          className,
        };
        return <Button {...propsBtn}>{content}</Button>;
      }
      return null;
    });
  }
  return (
    <React.Fragment>
      <span style={buttonFloat ? { float: buttonFloat } : {}}>
        {dataBtn}
        {renderRefresh(handleRefresh, style)}
      </span>
      <span className="clearfix" />
      <div style={containerStyle ? containerStyle : { marginBottom: '30px' }} />
    </React.Fragment>
  );
}
