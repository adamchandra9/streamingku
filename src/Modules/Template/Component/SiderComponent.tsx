import { CalendarOutlined, DashboardOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom';
import React from 'react';

const { Sider } = Layout;
export default function SiderComponent(props) {
  const { siderIsCollapse, location } = props;
  return (
    <Sider collapsed={siderIsCollapse} className="sider">
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/admin" icon={<DashboardOutlined />}>
          <Link to={`/admin`}>
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/event" icon={<CalendarOutlined />}>
          <Link to={`/admin/event`}>
            <span>Event</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
