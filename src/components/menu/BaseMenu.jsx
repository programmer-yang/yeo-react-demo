import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import styles from "./BaseMenu.less";

// sider 有一个双次render的bug，是框架自身问题，如果有强制要求，可以考虑替换
const { Sider } = Layout;
const { SubMenu } = Menu;

const BaseMenu = ({ collapsed }) => (
  <Sider collapsed={collapsed}>
    <div className={styles.root}>
      <div className={styles.logo}>
        <div className={styles.img}>{/* ... */}</div>
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
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
  </Sider>
);

export default BaseMenu;
