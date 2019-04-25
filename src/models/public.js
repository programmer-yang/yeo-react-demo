export default {
  namespace: "public",
  // subscriptions: {
  //   // ({ dispatch, history }, done)
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname, query }) => {
  //       console.log("---", pathname);
  //       // if (pathname === '/users') {
  //       //   dispatch({ type: 'fetch', payload: query });
  //       // }
  //     });
  //   },
  // },
  state: {
    username: "张三",
  },
  effects: {
    // * testEffect(_, { put }) {
    //   /* put方法触发一个reducer */
    //   yield put({ type: "testReducer", test: true });
    // },
  },
  reducers: {
    "save/username": (state, payload) => ({
      ...state,
      username: payload,
    }),
  },
};
