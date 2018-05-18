import React from 'react';
import { Button, Spin } from 'antd';
import styles from './Async.less';

const Async = ({ fetchData, hasFetch, fetchLog }) => {
  return (
    <div className={styles.root}>
      <Button onClick={fetchData}>开始请求</Button>
      <div className={styles.content}>
        <Spin spinning={hasFetch}>
          <div className={styles.message}>
            {fetchLog.map(item => <span key={item.id}>{item.message}</span>)}
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default Async;
