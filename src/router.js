/**
 * @Author: liu.yang
 * @Date: 2018-05-17 09:22:27
 */
import React from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import BaseLayout from './components/layouts/BaseLayout';
import HomePage from './pages/home/HomePage';
import DemoPage from './pages/demo/DemoPage';

import stores from './models';

const RouterConfig = () => {
  return (
    <Provider stores={stores}>
      {/* LocaleProvider 以防以后需要做国际化 */}
      <LocaleProvider locale={zhCN}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/" render={() => <Redirect to="/home" />} exact />
              <Route path="/home" component={HomePage} exact />
              <Route path="/about" render={() => <h1>About....</h1>} exact />
              <Route path="/demo" component={DemoPage} exact />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </LocaleProvider>
    </Provider>
  );
};

export default RouterConfig;
