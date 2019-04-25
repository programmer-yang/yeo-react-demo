import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import config from "./typeConfig";
import styles from "./Exception.less";

const Exception = ({ type, title, desc, img }) => {
  const pageType = type in config ? type : "404";
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src={img || config[pageType].img} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title || config[pageType].title}</div>
        <div className={styles.info}>{desc || config[pageType].desc}</div>
        <div className={styles.action}>
          <Link to="/">
            <Button type="primary">返回首页</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exception;
