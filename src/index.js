import dva from 'dva';
import './index.less';
import createBrowserHistory from 'history/createBrowserHistory';

import models from './models';
import Router from './router';

const history = createBrowserHistory();

const app = dva({
  history,
  onError: () => {
    // console.log(e); // 异常逻辑
  }
});

// app.use({});

Object.keys(models).forEach(model => {
  app.model(models[model]);
});

app.router(Router);

app.start('#root');

export default app._store; // eslint-disable-line
