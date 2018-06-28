import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.less';

const history = createBrowserHistory();
window._history = history;

ReactDOM.render(<Router history={history} />, document.getElementById('root'));
