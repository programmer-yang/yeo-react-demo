import { getData } from "../services/demo";

const initData = {
  todoList: [{ text: "测试任务", complete: false, id: Date.now() }],
  hasFetch: false,
  fetchLog: [],
};
export default {
  namespace: "demo",
  state: {
    ...initData,
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     // ...
  //   }
  // },
  effects: {
    *getData({ payload }, { call, put }) {
      yield put({ type: "addLog", payload: "开始请求数据" });
      const resData = yield call(getData, { type: payload });
      yield put({ type: "addLog", payload: "请求完毕" });
      const { errCode, data } = resData;
      if (errCode === "0") {
        yield put({ type: "addLog", payload: data });
      } else {
        yield put({ type: "addLog", payload: "返回数据异常" });
      }
    },
  },
  reducers: {
    addTodo: (state, { payload }) => ({
      ...state,
      todoList: [
        ...state.todoList,
        {
          text: payload,
          complete: false,
          id: Date.now(),
        },
      ],
    }),
    activeTodo: (state, { payload }) => {
      // 这里涉及到一个 数据污染 问题，大家在开发的时候切记
      const newTodoList = new Array(...state.todoList);
      const index = newTodoList.findIndex(item => item.id === payload);
      newTodoList[index] = {
        ...newTodoList[index],
        complete: !newTodoList[index].complete,
      };
      return {
        ...state,
        todoList: newTodoList,
      };
    },
    addLog: (state, { payload }) => ({
      ...state,
      fetchLog: [
        ...state.fetchLog,
        {
          message: payload,
          id: Math.random(),
        },
      ],
    }),
    clearData: () => ({ ...initData }),
  },
};
