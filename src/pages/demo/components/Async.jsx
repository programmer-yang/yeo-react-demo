import React from "react";
import { Button, Spin } from "antd";
import styles from "./Async.less";

const Async = ({ dispatch, hasFetch, fetchLog }) => {
  const fetchData = type => {
    dispatch({ type: "demo/getData", payload: type });
  };

  return (
    <div className={styles.root}>
      <div className={styles.action}>
        <Button type="primary" onClick={fetchData.bind(this, "")}>
          开始请求
        </Button>
        <Button onClick={fetchData.bind(this, "error")}>测试异常请求</Button>
      </div>
      <div className={styles.content}>
        <Spin spinning={hasFetch}>
          <div className={styles.message}>
            {fetchLog.map(item => (
              <span key={item.id}>{item.message}</span>
            ))}
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default Async;
