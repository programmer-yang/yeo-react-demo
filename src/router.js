/**
 * @Author: liu.yang
 * @Date: 2018-05-17 09:22:27
 */
import React from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import BaseLayout from './components/layouts/BaseLayout';
import HomePage from './pages/home/HomePage';
import DemoPage from './pages/demo/DemoPage';

import Exception from './pages/exception/index';

import stores from './models';

const RouterConfig = ({ history }) => {
  return (
    <Provider stores={stores}>
      {/* LocaleProvider 以防以后需要做国际化 */}
      <LocaleProvider locale={zhCN}>
        <Router history={history}>
          <BaseLayout>
            <Switch>
              <Route path="/" render={() => <Redirect to="/home" />} exact />
              <Route path="/home" component={HomePage} exact />
              <Route path="/about" render={() => <h1>About....</h1>} exact />
              <Route path="/exception" component={Exception} />
              <Route path="/demo" component={DemoPage} exact />
            </Switch>
          </BaseLayout>
        </Router>
      </LocaleProvider>
    </Provider>
  );
};

export default RouterConfig;
