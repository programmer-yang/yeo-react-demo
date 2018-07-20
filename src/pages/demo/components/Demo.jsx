import React from 'react';
import styles from './Demo.less';

const Demo = ({ title, info, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      {info ? <div className={styles.info}>{info}</div> : null}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Demo;
