import { Button, Col, Layout, Row } from 'antd';

import CIcon from '../../../Assets/Components/CIcon';
import React from 'react';

const { Header } = Layout;
export default function HeaderComponent(props) {
  const { siderIsCollapse, collapseSider } = props;
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
          <Button className="btnLogout">Logout</Button>
        </Col>
      </Row>
    </Header>
  );
}
