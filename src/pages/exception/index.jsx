import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Exception404 from './404';
import Exception500 from './500';

const Exception = () => {
  return (
    <Switch>
      <Route path="/exception/404" component={Exception404} exact />
      <Route path="/exception/500" component={Exception500} exact />
    </Switch>
  );
};

export default Exception;
