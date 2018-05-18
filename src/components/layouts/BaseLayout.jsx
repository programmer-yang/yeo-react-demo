/**
 * @Author: liu.yang
 * @Date: 2018-05-17 09:42:35
 */
import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import TopHeader from '../header/TopHeader';
import BaseMenu from '../menu/BaseMenu';
import styles from './BaseLayout.less';

const { Content, Sider } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <Layout className={styles.root}>
      <TopHeader />
      <Layout style={{ marginTop: '64px' }}>
        <Sider style={{ backgroundColor: '#fff' }}>
          <BaseMenu />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ height: '100%' }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
