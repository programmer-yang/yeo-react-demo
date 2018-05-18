const mock = {
  'POST /api/fetch': (req, res) => {
    setTimeout(
      () =>
        res.json({
          code: '000',
          message: 'hello 我是后端，注意，这里是mock数据，不是真实数据'
        }),
      2000
    );
  }
};
module.exports = mock;
