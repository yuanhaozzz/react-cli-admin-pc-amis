/**
 * @description 获取URL参数
 */
export const queryUrlSearch = () => {
  const search = window.location.search;
  if (search.length <= 1) {
    return {};
  }
  return JSON.parse(
    '{"'.concat(
      decodeURIComponent(search.substring(1))
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"'),
      '"}'
    )
  );
};

/**
 * @description 格式化事件
 * @param {*} date  时间戳 或 年月日时分秒字符串
 * @param {*} format 格式 yyyy-MM-dd hh:mm:ss
 * @returns
 */
export const format = (date, format) => {
  // 时间戳
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

/**
 * @description 删除为空字段
 * @param {*} data  数据
 */
export const deleteFieldIsUndefined = (data = {}) => {
  for (var key in data) {
    if (data[key] === undefined || data[key] === null || data[key] === "") {
      delete data[key];
    }
  }
  return data;
};

// export
