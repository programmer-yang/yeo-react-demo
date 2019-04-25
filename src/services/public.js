import { get } from "solomon-fetch-web";

/**
 * 这两个API是两个暂时API，主要是暂时如何规范的写API参数和如何组合API
 */

// 公用的API可以提到这个位置
export const getData = data => get("/api/fetch", data);

/**
 * 假设这个后端请求,允许的参数是 {id}
 * 返回的数据结构是 [{...}, {...}, {...}]
 * 我们的业务是通过id获取其中的一个内容
 * 我们可以写成如下逻辑
 * @param id 请求ID
 * @returns
 */
export const getDataById = id =>
  getData({ id }).then(({ data }) => {
    /* 对得到的数据做一个预处理,提取列表中的第一个元素 */
    return data && data[0];
  });
