import { observable, action } from 'mobx';
import { fetch } from '../services/demoApi';

class demoModel {
  @observable
  todoList = [{ text: '测试任务', complete: false, id: Date.now() }];

  @observable hasFetch = false;
  @observable fetchLog = [];

  @action
  addTodo = text => {
    this.todoList = new Array(...this.todoList, {
      text,
      complete: false,
      id: Date.now()
    });
  };
  @action
  activeTodo = id => {
    this.todoList = new Array(
      ...this.todoList.map(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      })
    );
  };

  @action
  changeFetchStatus = status => {
    this.hasFetch = status;
  };
  @action
  changeFetchLog = message => {
    this.fetchLog = new Array(...this.fetchLog, { message, id: Date.now() });
  };

  // 这是一个异步请求
  fetchData = type => {
    this.changeFetchStatus(true);
    this.changeFetchLog('开始请求后台服务');
    fetch({ type }).then(resData => {
      this.changeFetchStatus(false);
      if (resData.errCode === '0') {
        this.changeFetchLog('请求成功');
        this.changeFetchLog(`这是后端的返回：${resData.data}`);
      } else {
        this.changeFetchLog('请求失败');
      }
    });
  };
}

export default new demoModel();
