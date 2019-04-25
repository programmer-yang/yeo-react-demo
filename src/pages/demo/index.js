/**
 * author: liu.yang
 * date: 2018-08-14 12:03:10
 */
import React, { Component } from "react";
import { connect } from "dva";
import { equals } from "solomon-utils"; // 暂时不考虑 alias，如果有需求，可以联系作者
import styles from "./index.less";

import Demo from "./components/Demo";
import Todo from "./components/Todo";
import Async from "./components/Async";

@connect(({ demo, loading }) => ({ demoData: demo, loadingData: loading }))
class DemoPage extends Component {
  shouldComponentUpdate(nextProps) {
    const { demoData, loadingData } = this.props;
    return (
      !equals(nextProps.demoData, demoData) ||
      !equals(nextProps.loadingData, loadingData)
    );
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "demo/clearData" });
  }

  render() {
    const { dispatch, demoData, loadingData } = this.props;
    const { effects } = loadingData;

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
        <Demo title="Mobx 异步">
          <Async
            dispatch={dispatch}
            hasFetch={effects["demo/getData"] || false}
            fetchLog={demoData.fetchLog}
          />
        </Demo>
      </div>
    );
  }
}

export default DemoPage;
