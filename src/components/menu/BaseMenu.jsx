import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './BaseMenu.less';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const BaseMenu = () => {
  return (
    <div className={styles.root}>
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link to="/home">
            <Icon type="pie-chart" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">
            <Icon type="desktop" />
            <span>About</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>Team</span>
            </span>
          }
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to="/demo">
            <Icon type="smile-o" />
            <span>Demo</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default BaseMenu;
