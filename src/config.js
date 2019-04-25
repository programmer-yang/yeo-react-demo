/**
 * author: liu.yang
 * date: 2018-09-16 13:59:42
 * 放一些配置数据
 */

const config = {
  type: "xxx",
  storagePrefix: "__webdemo__",
  errCode: 0, // 后端业务正常返回码
  errRedirectCode: -1, // 约定需要跳转到登录页面的errCode值 默认是-1
  errRedirectURL: "", // 当需要重新登录的时候的登录页面URL
};

export default config;
