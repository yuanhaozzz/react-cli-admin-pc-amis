import axios from "axios";

function noop() {}

function initApi(
  options = {},
  requestInterceptors = noop,
  requestInterceptorsError = noop,
  responseInterceptors = noop,
  responseInterceptorsError = noop
) {
  let instance = axios.create({
    baseURL: options.url,
    timeout: 1000,
  });

  // 设置默认请求头
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  /**
   * @description 请求拦截器
   */
  instance.interceptors.request.use(
    requestInterceptors,
    requestInterceptorsError
  );

  /**
   * @description 响应拦截器
   */
  instance.interceptors.response.use(
    responseInterceptors,
    responseInterceptorsError
  );

  function get(config) {
    return function (url) {
      return instance.get(url, config);
    };
  }

  function post(config) {
    return function (url, params) {
      return instance.post(url, params, config);
    };
  }

  function postForm() {}

  /**
   * @description 可以修改初始化配置的url
   * @param {*} baseUrl
   */
  function api(config) {
    return {
      get: get(config),
      post: post(config),
      postForm,
    };
  }
  return api;
}

export default initApi;
