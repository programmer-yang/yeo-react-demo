/**
 * @Author: liu.yang
 * @Date: 2018-07-19 21:58:44
 */

import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

import BaseLayout from './components/layouts/BaseLayout';
import Exception from './pages/exception';
import HomePage from './pages/home/HomePage';
import DemoPage from './pages/demo/DemoPage';

function RouterConfig({ history }) {
  return (
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
  );
}

export default RouterConfig;
