import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import styles from "./BaseMenu.less";

// sider 有一个双次render的bug，是框架自身问题，如果有强制要求，可以考虑替换
const { Sider } = Layout;
const { SubMenu } = Menu;

/**
 * 递归渲染菜单
 * @param data
 * @returns {*}
 */
const renderMenu = data => {
  return data.map(({ key, children, icon, title = "", link }) => {
    const iconComp = icon ? <Icon type={icon} /> : undefined;
    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <span>
              {iconComp}
              <span>{title}</span>
            </span>
          }
        >
          {renderMenu(children)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={key}>
          {link ? (
            <Link to={link}>
              {iconComp}
              <span>{title}</span>
            </Link>
          ) : (
            <React.Fragment>
              {iconComp}
              <span>{title}</span>
            </React.Fragment>
          )}
        </Menu.Item>
      );
    }
  });
};

const BaseMenu = ({ collapsed, data }) => (
  <Sider collapsed={collapsed}>
    <div className={styles.root}>
      <div className={styles.logo}>
        <div className={styles.img} />
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
        {renderMenu(data, !collapsed)}
      </Menu>
    </div>
  </Sider>
);

export default BaseMenu;
