import React from 'react';
import { Dropdown, Avatar, Menu, Icon, Layout } from 'antd';
import styles from './TopHeader.less';

const { Header } = Layout;

const TopHeader = () => {
  const onMenuClick = () => {
    // ...
  };
  const menu = (
    <Menu className={styles.menu} onClick={onMenuClick}>
      <Menu.Item key="logout" className={styles.logout}>
        <Icon type="logout" />退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className={styles.root}>
      <div className={styles.left}>
        <div className={styles.logo}>{/* ... */}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <Icon type="home" />
        </div>
        <div className={styles.item}>
          <Icon type="file-text" />
        </div>
        <div className={styles.item}>
          <Dropdown overlay={menu} trigger={['click']}>
            <span className={styles.userBox}>
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                className={styles.img}
                icon="user"
              />
              <span className={styles.name}>张三</span>
            </span>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default TopHeader;
