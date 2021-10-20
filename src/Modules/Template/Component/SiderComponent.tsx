import { CalendarOutlined, DashboardOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom';
import React from 'react';

const { Sider } = Layout;
export default function SiderComponent(props) {
  const { siderIsCollapse } = props;
  return (
    <Sider collapsed={siderIsCollapse} className="sider">
      <div className="logo" />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to={`/admin`}>
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <Link to={`/admin/event`}>
            <span>Event</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
