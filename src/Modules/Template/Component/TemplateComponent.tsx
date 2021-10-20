import HeaderContainer from '../Container/HeaderContainer';
import { Layout } from 'antd';
import React from 'react';
import SiderContainer from '../Container/SiderContainer';

const { Content } = Layout;
export default function TemplateComponent(props) {
  const { children } = props;
  return (
    <Layout>
      <SiderContainer />
      <Layout>
        <HeaderContainer />
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
