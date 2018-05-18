/**
 * @Author: liu.yang
 * @Date: 2018-05-17 14:12:04
 * 轻度封装fetch 提供使用方式一样的get post请求接口
 */
import fetch from 'isomorphic-fetch';
import { stringify } from 'query-string';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkRedirect(result) {
  if (typeof result === 'object' && result.redirect_url) {
    window.location.href = result.redirect_url;
  } else {
    return result;
  }
}

/**
 * 支持跨域
 * 支持状态检查
 * @param {*} url 请求地址
 * @param {*} options 请求参数
 */
export default function request(url, options) {
  const newOptions = {
    ...options,
    credentials: 'include',
    headers: {
      'x-requested-with': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkRedirect)
    .catch(err => ({ err }));
}

export const get = (url, data) => {
  return request(trimURL(`${url}?${stringify(data)}`), {
    method: 'GET'
  });
};
export const post = (url, data) => {
  return request(trimURL(url), {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

/**
 * 统一处理URL 添加前缀等统一操作
 * @param {*} url 原URL
 * 可以考虑把固定部分抽离成配置文件，根据需求来
 */
const trimURL = url => {
  // return `/itserviceplatform${url}`;
  return `/api${url}`;
};
