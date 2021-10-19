import * as AntdIcon from '@ant-design/icons';

import React from 'react';

interface IProps {
  type;
  className?;
  onClick?;
  style?;
}

export default function CIcon(props: IProps) {
  const { type, className, onClick, style } = props;
  function Icon() {
    if (AntdIcon[type]) {
      const iconData = AntdIcon[type];
      const dataprops = {
        className,
        onClick,
        style,
      };

      return iconData.render(dataprops);
    }
    return null;
  }
  return <Icon />;
}
