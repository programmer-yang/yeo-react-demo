import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './DemoPage.less';

import Demo from './components/Demo';
import Todo from './components/Todo';
import Async from './components/Async';

@connect(({ demo }) => ({ demoData: demo }))
class DemoPage extends Component {
  componentWillUnmount() {
    this.props.dispatch({ type: 'demo/clearData' });
  }

  render() {
    const { dispatch, demoData } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.demo}>
          <Demo
            title="redux基础使用"
            info="本项目中的redux是使用的一个封装库-dva，简化了传统redux使用过于复杂的问题"
          >
            <Todo todoList={demoData.todoList} dispatch={dispatch} />
          </Demo>
        </div>
        <div className={styles.demo}>
          <Demo title="Mobx 异步">
            <Async
              dispatch={dispatch}
              hasFetch={demoData.hasFetch}
              fetchLog={demoData.fetchLog}
            />
          </Demo>
        </div>
      </div>
    );
  }
}

export default DemoPage;
