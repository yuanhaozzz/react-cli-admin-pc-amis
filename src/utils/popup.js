/**
 * @description 提醒弹窗
 * @param {*} info  字符串
 * @param {*} delay 延迟多久消失
 * @returns
 */
export const toast = function (info, delay = 2000) {
  const hasToast = document.querySelector("#utils-common-toast-wrapper");
  if (hasToast) {
    return;
  }
  const toast = document.createElement("div");
  toast.innerText = info;
  toast.className = "toast-wrapper";
  toast.id = "utils-common-toast-wrapper";
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, delay);
};

/**
 * @description 创建loading
 */
export const createLoading = () => {
  const wrap = document.createElement("div");
  wrap.className = "common-loading-wrapper";
  const child = document.createElement("div");
  child.className = "loading";
  wrap.appendChild(child);
  document.body.appendChild(wrap);
};

/**
 * @description 显示loading
 */
export const showLoading = () => {
  const loadingDom = document.querySelector(".common-loading-wrapper");
  if (!loadingDom.classList.contains("common-show-loading-wrapper")) {
    loadingDom.classList.add("common-show-loading-wrapper");
  }
};

/**
 * @description 隐藏loading
 */
export const hideLoading = () => {
  const loadingDom = document.querySelector(".common-loading-wrapper");
  loadingDom.classList.remove("common-show-loading-wrapper");
};
