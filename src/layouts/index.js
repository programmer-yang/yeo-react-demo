import React, { Component } from "react";
import { connect } from "dva";
import router from "umi/router";
import SelectLang from "solomon-select-lang";
import Layout from "solomon-layout";
import { findActiveArray } from "solomon-utils";
import menuData from "./menuData";
import Logo from "../components/logo";

import styles from "./index.less";

@connect(stores => ({ publicData: stores.public }))
class BaseLayout extends Component {
  localChangeActiveMenu = key => {
    const activeMenus = findActiveArray(
      item => item.key === key || item.link === key,
      menuData
    );
    return Array.isArray(activeMenus)
      ? activeMenus[activeMenus.length - 1]
      : {};
  };

  localOnClickMenu = ({ item }) => {
    const { props } = item;
    if (props && props.link) {
      router.push(props.link);
    }
  };

  render() {
    const { children, publicData, location } = this.props;
    const { username } = publicData;

    if (location.pathname === "/") {
      return children;
    }

    const { key = "" } =
      this.localChangeActiveMenu(location.pathname, menuData) || {};

    const layoutOptions = {
      menuData,
      menuOptions: {
        logoRender: Logo,
        selectedkey: key,
        defaultSelectedKeys: [key],
        onClick: this.localOnClickMenu,
      },
      headerOptions: {
        username,
        localeRender: () => <SelectLang />,
      },
    };
    return (
      <Layout className={styles.root} {...layoutOptions}>
        {children}
      </Layout>
    );
  }
}

export default BaseLayout;
