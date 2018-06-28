const mock = {
  'POST /api/fetch': (req, res) => {
    console.log(req.body);
    // const type = req.body.type;
    setTimeout(() => {
      if (req.body.type === 'error') {
        res.status(200).json({
          errCode: '-1',
          errMsg: '连接数据库错误啦',
          data: ''
        });
      } else {
        res.status(200).json({
          errCode: '0',
          data: 'hello 我是后端，注意，这里是mock数据，不是真实数据'
        });
      }
    }, 2000);
  }
};
module.exports = mock;
