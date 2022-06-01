import request from "src/utils/request";

import apiConfig from "./apiUrl";
import { showLoading, hideLoading } from "src/utils/popup";
import { message } from "antd";

// 请求队列
let requestQueue = [];

// 初始化
const api = request(
  { url: apiConfig.root },
  requestInterceptors,
  requestInterceptorsError,
  responseInterceptors,
  responseInterceptorsError
);

/**
 * @description 请求拦截器
 * @param {*} config
 */
function requestInterceptors(config) {
  // 添加一些参数
  //   config.params = {
  //     ...params,
  //   };
  addQueue(config);
  // 打开loading
  showLoading();
  // 2s强制关闭
  setTimeout(() => {
    hideLoading();
  }, 2000);
  return config;
}

/**
 * @description 请求拦截器报错
 * @param {*} error 错误
 */
function requestInterceptorsError(error) {
  message.error(error?.message || error || "报错啦");
  hideLoading();
  clearQueue();
  // 对请求错误做些什么
  return Promise.reject(error);
}

/**
 * @description 响应拦截器
 * @param {*} response
 */
function responseInterceptors(response) {
  const { data, config } = response;
  deleteQueue(config);
  // 处理业务报错码
  if (data.dm_error !== 0) {
    return Promise.reject(data.error_msg);
  }
  return data.data;
}

/**
 * @description 响应拦截器报错
 * @param {*} error
 */
function responseInterceptorsError(error) {
  message.error(error?.message || error || "报错啦");
  hideLoading();
  clearQueue();
  return Promise.reject(error);
}

/**
 * @description 添加 使用队列方式，防止重复请求接口
 * @param {@} config
 */
function addQueue(config) {
  const { url, isAddQueue } = config;
  // 直接加入不判断是否存在于队列中
  if (isAddQueue) {
    requestQueue.push({ url });
  } else {
    // 没有查到 加入队列中
    const findUrl = requestQueue.find((item) => item.url !== url);
    if (!findUrl) {
      requestQueue.push({ url });
    }
  }
}

/**
 * @description 删除
 * @param {@} config
 */
function deleteQueue(config) {
  const { url } = config;
  const findUrlIndex = requestQueue.findIndex((item) => item.url === url);
  if (findUrlIndex >= 0) {
    requestQueue.splice(findUrlIndex, 1);
  }
  if (requestQueue.length <= 0) {
    setTimeout(() => {
      hideLoading();
    }, 500);
  }
}

function clearQueue() {
  requestQueue = [];
}

export default api;
