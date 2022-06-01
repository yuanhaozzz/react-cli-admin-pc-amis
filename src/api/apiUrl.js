// 线上域名
export const online = "";
// 预发布域名
export const beta = "";
// 测试环境域名
export const test = "";
// 本地域名
export const local = "localhost:3000";

const HOST = window.location.host || online;

const ApiMap = {
  [online]: {
    root: "https://gos-busi.misslooker.com",
  },
  [beta]: {
    root: "https://betagos-busi.misslooker.com",
  },
  [test]: {
    root: "https://testgos-busi.misslooker.com",
  },
  [local]: {
    root: "https://testgos-busi.misslooker.com",
  },
};

export default ApiMap[HOST];
