import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './DemoPage.less';

import Demo from './Demo';
import Todo from './Todo';
import Async from './Async';

@inject(({ stores }) => ({ demoModel: stores.demoModel }))
@observer
class DemoPage extends Component {
  render() {
    const {
      todoList,
      addTodo,
      activeTodo,
      fetchData,
      hasFetch,
      fetchLog
    } = this.props.demoModel;
    return (
      <div className={styles.root}>
        <div className={styles.demo}>
          <Demo
            title="Mobx基础使用"
            info="注意inject observer 解构等小技巧的应用"
          >
            <Todo
              todoList={todoList}
              addTodo={addTodo}
              activeTodo={activeTodo}
            />
          </Demo>
        </div>
        <div className={styles.demo}>
          <Demo title="Mobx 异步">
            <Async
              fetchData={fetchData}
              hasFetch={hasFetch}
              fetchLog={fetchLog}
            />
          </Demo>
        </div>
      </div>
    );
  }
}

export default DemoPage;
