import { Col, Layout, Row } from 'antd';

import CButton from '../../../Assets/Components/CButton';
import CIcon from '../../../Assets/Components/CIcon';
import React from 'react';

const { Header } = Layout;
export default function HeaderComponent(props) {
  const { siderIsCollapse, collapseSider } = props;
  const buttonData = [
    {
      type: 'primary',
      className: 'btnLogout',
      content: 'Logout',
      id: 'btnLogout',
    },
  ];
  return (
    <Header className="header">
      <Row>
        <Col span={1}>
          <CIcon
            type={siderIsCollapse ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'}
            onClick={collapseSider}
            className="iconCollapse"
          />
        </Col>
        <Col span={10}>
          <span>Admin</span>
        </Col>
        <Col offset={10} span={3}>
          <CButton buttonData={buttonData} buttonFloat="right" />
        </Col>
      </Row>
    </Header>
  );
}
