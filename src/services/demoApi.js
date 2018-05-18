import { post } from '../common/request';

// 获取API查询推荐参数（已完成） （普通用户）
export const fetch = data => post('/fetch', data);
