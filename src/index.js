import dva from 'dva';
import './index.less';
import createBrowserHistory from 'history/createBrowserHistory';

import models from './models';

const history = createBrowserHistory();

const app = dva({
  history,
  onError: () => {
    // console.log(e); // 异常逻辑
  }
});

// app.use({});

for (let model in models) {
  app.model(models[model]);
}

app.router(require('./router').default);

app.start('#root');

export default app._store; // eslint-disable-line
