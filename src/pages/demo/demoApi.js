import { get } from '../../utils/request';

// 获取API查询推荐参数（已完成） （普通用户）

const getData = data => get('/fetch', data);

export default {
  getData
};
