import axios from "axios";
import ApiUrl from "src/api/apiUrl";

export const envConfig = {
  theme: "cxd",
  fetcher: async (config) => {
    try {
      // const data = await axios({
      //   ...config,
      //   baseURL: ApiUrl.root,
      //   url: config.url,
      //   method: config.method,
      //   data: config.data,
      // });
    } catch (error) {
      throw new Error(error);
    }
  },
  copy: (content) => {
    // copy(content);
    // toast.success("内容已复制到粘贴板");
  },
};

export const propsConfig = {
  locale: "zh-CN",
  data: {
    username: "浩哥",
  },
};
