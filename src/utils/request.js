/**
 * @Author: liu.yang
 * @Date: 2018-05-17 14:12:04
 * 轻度封装fetch 提供使用方式一样的get post请求接口
 */
import fetch from "isomorphic-fetch";
import { notification } from "antd";
import { stringify } from "query-string";
import { routerRedux } from "dva/router";

import store from "../index";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext
  });

  const error = new Error(response.statusText);
  error.errCode = response.errCode;
  error.errortext = errortext;
  throw error;
}

/**
 * 检查请求业务是否成功
 */
function checkCode(response) {
  if (response.errCode === "0") {
    return response;
  }
  if (response.errCode === "1") {
    // 权限无效处理
  }

  const errortext = response.errMsg || "后端接口返回异常";
  notification.error({
    message: `请求错误 ${response.errCode}`,
    description: errortext
  });

  const error = new Error(response.errCode);
  error.errCode = response.errCode;
  error.errortext = errortext;
  throw error;
}

// function checkRedirect(result) {
//   if (typeof result === 'object' && result.redirect_url) {
//     window.location.href = result.redirect_url;
//   } else {
//     return result;
//   }
// }

/**
 * 支持跨域
 * 支持状态检查
 * @param {*} url 请求地址
 * @param {*} options 请求参数
 */
export default function request(url, options) {
  const newOptions = {
    ...options,
    credentials: "include",
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
    .catch(err => {
      const status = err.errCode;
      const { dispatch } = store;
      if (status <= 504 && status >= 500) {
        dispatch(routerRedux.push("/exception/500"));
      }
      if (status >= 404 && status < 422) {
        dispatch(routerRedux.push("/exception/404"));
      }
      if (status === "-1") {
        dispatch(routerRedux.push(`/exception/500?msg=${err.response}`));
      }
      return { ...err, message: JSON.stringify({ url, newOptions }) };
    });
}

/**
 * 统一处理URL 添加前缀等统一操作
 * @param {*} url 原URL
 * 可以考虑把固定部分抽离成配置文件，根据需求来
 */
const trimURL = url => `/api${url}`;

export const get = (url, data) =>
  request(trimURL(`${url}?${stringify(data)}`), {
    method: "GET"
  });
export const post = (url, data) =>
  request(trimURL(url), {
    method: "POST",
    body: JSON.stringify(data)
  });
