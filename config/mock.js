/**
 * @Author: liu.yang
 * @Date: 2018-05-17 17:50:42
 *
 * 一个简单的mock实现
 * 目前不支持热更新
 */
const config = require('../.mock.data.js');
const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  Object.keys(config).forEach(key => {
    const keyParsed = parseKey(key);
    app[keyParsed.method](
      keyParsed.path,
      createMockHandler(keyParsed.method, keyParsed.path, config[key])
    );
  });

  function parseKey(key) {
    let method = 'get';
    let path = key;
    if (key.indexOf(' ') > -1) {
      const splited = key.split(' ');
      method = splited[0].toLowerCase();
      path = splited[1]; // eslint-disable-line
    }
    return { method, path };
  }

  function createMockHandler(method, path, value) {
    return function mockHandler(...args) {
      const res = args[1];
      if (typeof value === 'function') {
        value(...args);
      } else {
        res.json(value);
      }
    };
  }
};
